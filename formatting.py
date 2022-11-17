# Formatting the JSON files into something more readable

import json

# Get the number of commits per person from a given file
def get_commit_info(filename):
    # Create a dictionary with commiter name and number of commits as key value pairs
    commits_per_author = {}
    
    # Read in JSON file
    with open(filename,'r') as file:

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

    return commits_per_author  


if __name__=='__main__':
    filename = "commits.json"
    dict = get_commit_info(filename)
    print(dict)