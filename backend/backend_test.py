from API_test import test_code_frequency, test_commit_activity, test_languages, test_commits
from formatting_test import test_get_code_frequency_info, test_get_commit_info, test_get_language_info

# API calls tests
def test_API():
    test_languages()
    test_code_frequency()
    test_commit_activity()
    test_commits()

# formatting tests
def test_formatting():
    test_get_commit_info()
    test_get_language_info()
    test_get_code_frequency_info()