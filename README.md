# Yarn Completion

Completion for yarn scripts from your current projects.

## Install

Install the script globally:

```shell
$ yarn global add yarn-completion
```

Copy the file `yarn-completion.bash` to your user directory then add this script to your `~/.bashrc`:

```bash
if [ -f ~/yarn-completion.bash ]; then
    . ~/yarn-completion.bash
fi
```

## Usage

`cd` into a project with a `package.json`, then type `yarn` and tab to see the list of available scripts.
