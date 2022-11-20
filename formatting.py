# Formatting the JSON files into something more readable

import json

# Format commits.json
# Get the number of commits per person from a given file
def get_commit_info():
    # Create a dictionary with commiter name and number of commits as key value pairs
    commits_per_author = {}
    
    # Read in JSON file
    with open("commits.json",'r') as file:

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
    
    # Write the results into a text file
    with open("formatted_commits.txt", 'w') as file:
        file.write(",".join(names))

        file.write("\n")

        file.write(",".join(map(str,number_of_commits)))    # Convert the list of int into string

# Format languages.json
# Get the number of lines written in each language
def get_language_info():    
    # Read in JSON file
    with open("languages.json",'r') as file:

    # Return JSON object as a dictionary
        data = json.load(file)

    # Split the dictionary keys and values into seperate lists
    languages = data.keys()
    lines_of_code = data.values()
    
    # Write the results into a text file
    with open("formatted_languages.txt", 'w') as file:
        file.write(",".join(languages))

        file.write("\n")

        file.write(",".join(map(str,lines_of_code)))    # Convert the list of int into string

# Format code_frequency.json
# Get the number of lines written and deleted in each commit
def get_code_frequency_info():    
    # Read in JSON file
    with open("code_frequency.json",'r') as file:

    # Return JSON object as a dictionary
        data = json.load(file)
        lines_added = []
        lines_deleted = []

    # return the list of lines added and deleted from the data list
    for x in data:
        lines_added.append(x[1])
        lines_deleted.append(x[2])
    
    # Write the results into a text file
    with open("formatted_code_frequency.txt", 'w') as file:
        file.write(",".join(map(str,lines_added)))  # Convert the list of int into string

        file.write("\n")

        file.write(",".join(map(str,lines_deleted)))    # Convert the list of int into string

if __name__=='__main__':
    get_code_frequency_info()