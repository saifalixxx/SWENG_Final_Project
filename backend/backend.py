# To setup type into command line
# pip install requests

from API_Calls import *
from formatting import *

if __name__ == '__main__':

    # Returns a list of languages used and the pecentage of the repo written in that language
    languages()
    get_language_info('languages.json', 'formatted_languages.json')

    # Returns the number of lines added and deleted each week
    code_frequency()
    get_code_frequency_info('code_frequency.json', 'formatted_code_frequency.json')

    # Returns the number of commits per week and the daily breakdown
    commit_activity()
    get_commits_activity_info('commit_activity.json', 'formatted_commit_activity.json')
    get_active_days('commit_activity.json', 'active_days.json')

    # Returns the number of commits made by each author
    commits()
    get_commit_info('commits.json', 'formatted_commits.json')
    