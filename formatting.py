# Formatting the JSON files into something more readable

import json

# Get the number of commits per person from a given file
def get_commit_info(filename):
    # Create a dictionary with commiter name and number of commits as key value pairs
    dict = {}
    with open(filename,"r") as commits_data:
        data = json.loads(commits_data) # Possibly json.load, no idea what I am doing
        dict = data["name"]
        return dict


if __name__=='__main__':
    filename = "commits.json"
    print(get_commit_info(filename))