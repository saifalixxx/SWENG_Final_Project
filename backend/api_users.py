import requests
import json
import os
import dateutil.parser      # run "pip install python-dateutil"

# !! Input your own access token to run

# access_token = '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'
# user_name = 'Rian873'
# access_token = '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'
# user_name = 'wlin29'
access_token = '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'
user_name = 'wlin29'

# Create lists to keep urls of individuals commits
digisomni_list = []
namark_list = []
berinaniesh_list = []
tenallday_list = []

def get_commit_url():
	# Go through a no of pages for roughly the past year
    for pageno in range(17):
        # Get call for current page
        url = "https://api.github.com/repos/vircadia/vircadia/commits?page=" + \
            str(pageno)
        response = requests.get(url, auth=(user_name, access_token))
        a = response.json()
        # Go through every commit in the page and add them to the correct users list
        for count in range(30):
            if (a[count]['author'] != None):
                if (a[count]['author']['login'] == 'digisomni'):
                    commit_url = a[count]['url']
                    digisomni_list.append(commit_url)
                    # print("digisomni: " + commit_url)
                elif (a[count]['author']['login'] == 'namark'):
                    commit_url = a[count]['url']
                    namark_list.append(commit_url)
                    # print("namark: " + commit_url)
                elif (a[count]['author']['login'] == 'berinaniesh'):
                    commit_url = a[count]['url']
                    berinaniesh_list.append(commit_url)
                    # print("berinaniesh: " + commit_url)
                elif (a[count]['author']['login'] == '10allday'):
                    commit_url = a[count]['url']
                    tenallday_list.append(commit_url)
                    # print("10allday: " + commit_url)
        print(pageno)

# returns a list containing the commits of the user for each week of the year
def get_user_commits(dest, repo_url):
    if (os.path.exists(dest)):
        os.remove(dest)
    with open(dest, 'w', encoding='utf-8') as f:
        response = requests.get(repo_url, auth=(user_name, access_token))
        commits = response.json()
        commits_per_week = commits["owner"]
        json.dump(commits_per_week, f, ensure_ascii=False, indent=4)
    f.close()

# returns a json file with the lines of code added and deleted by the user for each week of the year
def get_code_frequency(dest):
    if (os.path.exists(dest)):
        os.remove(dest)
    with open(dest, 'w', encoding='utf-8') as f:
    
        lines_added = [0] * 52
        lines_deleted = [0] * 52
    
        for count in range(len(digisomni_list)):
            url = digisomni_list[count]
            print(url)
            response = requests.get(url, auth=(user_name, access_token))
            commit = response.json()
    
            date = commit["commit"]["author"]["date"]
            datetime_object = dateutil.parser.isoparse(date)
            week_number = datetime_object.isocalendar().week
    
            additions = int(commit["stats"]["additions"])
            deletions = int(commit["stats"]["deletions"])
    
            lines_added[week_number-1] = lines_added[week_number-1] + additions
            lines_deleted[week_number-1] = lines_deleted[week_number-1] - deletions
    
        result = {"lines added": lines_added, "lines deleted": lines_deleted}
        json.dump(result, f, ensure_ascii=False, indent=4)
    f.close()