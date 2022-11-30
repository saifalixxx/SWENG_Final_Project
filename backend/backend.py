# To setup type into command line
# pip install requests

from API_Calls import *
from formatting import *

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
    