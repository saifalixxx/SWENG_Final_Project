# Formatting the JSON files into something more readable

import json
import os
import shutil

src_path = "backend"
dest_path = "dashboard\src"

# Format commits.json
# Get the number of commits per person from a given file
def get_commit_info(filename, result_filename):
    # Create a dictionary with commiter name and number of commits as key value pairs
    commits_per_author = {}

    # Read in JSON file
    src = os.path.join(src_path, filename)
    with open(src,'r') as file:

    # Return JSON object as a dictionary
        data = json.load(file)

    # Narrow down the json file until it is just a name representing a commit
        commit_list = [x['commit'] for x in data]
        author_list = [x['author'] for x in commit_list]
        name_list = [x['name'] for x in author_list]

        # Loop through the list of names and count how many instances there are of each name
        for name in name_list:
            if name in commits_per_author:
                commits_per_author[name] += 1
            else:
                commits_per_author.update({name: 1})

    # Split the dictionary keys and values into seperate lists
    names = commits_per_author.keys()
    number_of_commits = commits_per_author.values()
    name_list = []
    number_of_commits_list = []
    for x in names:
        name_list.append(x)
    for x in number_of_commits:
        number_of_commits_list.append(x)
    result = {"labels":name_list, "data":number_of_commits_list}
    
    # Write the results into a json file
    dest = os.path.join(dest_path, result_filename)
    if(os.path.exists(dest)):
        os.remove(dest)
    with open(dest, 'w') as file:
        json.dump(result, file, indent = 4)   
    os.remove(src)

# Format languages.json
# Get the number of lines written in each language
def get_language_info(filename, result_filename):

    # Read in JSON file
    src = os.path.join(src_path, filename)
    with open(src,'r') as file:

    # Return JSON object as a dictionary
        data = json.load(file)

    # Split the dictionary keys and values into seperate lists
    languages = data.keys()
    lines_of_code = list(data.values())

    languages_list = []
    for x in languages:
        languages_list.append(x)

    # Convert lines_of_code into a list
    percentage_list = []
    for i in range(len(lines_of_code)):
        code_percentage = (lines_of_code[i]/sum(lines_of_code))*100
        percentage_list.append(code_percentage)
    
    result = {"languages":languages_list, "percentage":percentage_list}

    # Write the results into a json file
    dest = os.path.join(dest_path, result_filename)
    if(os.path.exists(dest)):
        os.remove(dest)
    with open(dest, 'w') as file:
        json.dump(result, file, indent = 4)
    os.remove(src)

# Format code_frequency.json
# Get the number of lines written and deleted in each commit
def get_code_frequency_info(filename, result_filename):    

    # Read in JSON file
    src = os.path.join(src_path, filename)
    with open(src,'r') as file:

    # Return JSON object as a dictionary
        data = json.load(file)
        lines_added = []
        lines_deleted = []

    # return the list of lines added and deleted from the data list
    for x in data:
        lines_added.append(x[1])
        lines_deleted.append(x[2])

    result = {"lines added":lines_added, "lines deleted":lines_deleted}
    
    # Write the results into a json file
    dest = os.path.join(dest_path, result_filename)
    if(os.path.exists(dest)):
        os.remove(dest)
    with open(dest, 'w') as file:
        json.dump(result, file, indent = 4)
    os.remove(src)

# Put commits_activity.json into the dashboard/src folder
def get_commits_activity_info(filename, result_filename):

    src = os.path.join(src_path, filename)
    dest = os.path.join(dest_path, result_filename)
    if(os.path.exists(dest)):
        os.remove(dest)
    shutil.move(src, dest)

# Find the number of days with commits each week
def get_active_days(filename, result_filename):
    # Read in JSON file
    src = os.path.join(src_path, filename)
    with open(src,'r') as file:

    # Return JSON object as a list of dictionaries
        data = json.load(file)
        active_days = []

    # return the list of lines added and deleted from the data list
    for week in data:
        days = week["days"]
        active_days_count = 0
        for commits_per_day in days:
            if commits_per_day != 0:
                active_days_count += 1
        active_days.append(active_days_count)

    
    # Write the results into a json file
    dest = os.path.join(dest_path, result_filename)
    if(os.path.exists(dest)):
        os.remove(dest)
    with open(dest, 'w') as file:
        json.dump(active_days, file, indent = 4)
    os.remove(src)

if __name__=='__main__':
    get_active_days('commit_activity.json', 'active_days.json')