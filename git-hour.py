import os
import sys
from datetime import datetime, timedelta
import git
from git import Repo

def set_commit_date(repo, commit, new_date):
    # Set the commit date
    commit.author_datetime = new_date
    commit.committer_datetime = new_date

def main(repo_path, branch_name):
    # Validate and set the repo path
    if not os.path.isdir(repo_path):
        print("Invalid repository path")
        sys.exit(1)

    # Initialize the repo
    repo = Repo(repo_path)
    if repo.bare:
        print("Repository is bare")
        sys.exit(1)

    # Checkout the specified branch
    repo.git.checkout(branch_name)

    # Get all commits on the specified branch
    commits = list(repo.iter_commits(branch_name))

    # Define the start time and interval
    current_time = datetime.now().replace(hour=19, minute=0, second=0, microsecond=0)
    interval = timedelta(minutes=6)

    # Rebase from the initial commit
    repo.git.rebase('--root', '--interactive')

    # Set new commit dates
    for i, commit in enumerate(repo.iter_commits('HEAD')):
        new_date = current_time + (i * interval)
        #set_commit_date(repo, commit, new_date)
        repo.git.commit('--amend', '--date=' + new_date.strftime('%Y-%m-%dT%H:%M:%S'))
        print("Commit effectué et ammend à " + new_date.strftime('%Y-%m-%dT%H:%M:%S'))

    # Push the modified history back to the remote repository
    repo.git.push('origin', branch_name, force=True)
    print("Commits updated and pushed successfully")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python script.py <repo_path> <branch_name>")
        sys.exit(1)
    repo_path = sys.argv[1]
    branch_name = sys.argv[2]
    main(repo_path, branch_name)
