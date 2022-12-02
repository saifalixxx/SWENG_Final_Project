# To setup type into command line
# pip install requests
# pip install python-dateutil
# need to put in github token in api_users.py

from API_Calls import *
from formatting import *
from api_users import *

if __name__ == '__main__':

    # Returns a list of languages used and the pecentage of the repo written in that language
    languages()
    src = get_src_path('languages.json')
    dest = get_dest_path('languages.json')
    get_language_info(src, dest)
    remove_src(src)

    # Returns the number of lines added and deleted each week
    code_frequency()
    src = get_src_path('code_frequency.json')
    dest = get_dest_path('code_frequency.json')
    get_code_frequency_info(src, dest)
    remove_src(src)

    # Returns the number of commits per week and the daily breakdown
    commit_activity()
    src = get_src_path('commit_activity.json')
    dest = get_dest_path('active_days.json')
    get_active_days(src, dest)

    dest = get_dest_path('commit_activity.json')
    move_commits_activity(src, dest)
    
    # Returns the number of commits made by each author
    commits()
    src = get_src_path('commits.json')
    dest = get_dest_path('commits.json')
    get_commit_info(src, dest)
    remove_src(src)
    
    # Returns the metrics for each individual user (runs api_users.py)
    get_commit_url()

    # returns the weekly commits of digisomni
    dest = get_dest_path('digisomni_commit_activity.json')
    repo_url = 'https://api.github.com/repos/digisomni/vircadia/stats/participation'
    get_user_commits(dest, repo_url)

    # returns a json file with the lines of code added and deleted by digisomni for each week of the year
    # !! returns all 0s for some reason
    dest = get_dest_path('digisomni_code_frequency.json')
    get_code_frequency(dest, 1)


    # returns the weekly commits of namark
    dest = get_dest_path('namark_commit_activity.json')
    repo_url = 'https://api.github.com/repos/namark/vircadia/stats/participation'
    get_user_commits(dest, repo_url)

    # returns a json file with the lines of code added and deleted by namark for each week of the year
    dest = get_dest_path('namark_code_frequency.json')
    get_code_frequency(dest, 2)


    # returns the weekly commits of berinaniesh
    dest = get_dest_path('berinaniesh_commit_activity.json')
    repo_url = 'https://api.github.com/repos/berinaniesh/vircadia/stats/participation'
    get_user_commits(dest, repo_url)

    # returns a json file with the lines of code added and deleted by berinaniesh for each week of the year
    dest = get_dest_path('berinaniesh_code_frequency.json')
    get_code_frequency(dest, 3)


    # returns the weekly commits of 10allday
    dest = get_dest_path('10allday_commit_activity.json')
    repo_url = 'https://api.github.com/repos/10allday/vircadia/stats/participation'
    get_user_commits(dest, repo_url)

    # returns a json file with the lines of code added and deleted by 10allday for each week of the year
    dest = get_dest_path('10allday_code_frequency.json')
    get_code_frequency(dest, 4)
