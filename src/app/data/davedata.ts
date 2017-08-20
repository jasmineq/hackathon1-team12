import { IQuestion } from './question.model';
import { IQuiz } from './quiz.model';

export const davedata: IQuestion[] = [
  {
    questionText: 'What is the command you would type in the terminal to specifically learn how to use git-config?',
    choices: ['git help', 'get help config', 'config', 'git help config'],
    answer: 'git help config',
    explanation: 'git help will display a small page of common git commands, an additional argument of \'config\' is required to get help for that particular command',
    quiz_id: 0
  },
  {
    questionText: 'What is the command for globally establishing your git user name, from the command line?',
    choices: [
      'git config --global username "Bruce Lee"',
      'git config --global user.name "Bruce Lee"',
      'git config user.name "Bruce Lee"',
      'git config --global user.name Bruce Lee'
    ],
    answer: 'git config --global user.name "Bruce Lee"',
    explanation: 'This command requires the --global flag.',
    quiz_id: 0
  },
  {
    questionText: 'What is the command to check which files have been modified or added since the last commit?',
    choices: ['git status', 'git checkout', 'git status --last', 'none of the above'],
    answer: 'git status',
    explanation: 'Git checkout is to switch to another branch. There is no --last option.',
    quiz_id: 0
  },
  {
    questionText: 'What is the command for viewing your git configuration settings?',
    choices: ['git config', 'git config --settings', 'git config list', 'git config --list'],
    answer: 'git config --list',
    explanation: 'The --list flag is required.',
    quiz_id: 0
  },
  {
    questionText: 'What is the command for displaying a log graph?',
    choices: ['git graph --log', 'git log --graph', 'either a or b', 'git log --oneline --graph'],
    answer: 'git log --oneline --graph',
    explanation: '',
    quiz_id: 0
  },
  {
    questionText: 'git log is too verbose, what is the best way to get git log entries on one line',
    choices: ['git log --oneline', 'git log {one line}', 'git oneline', 'git log --one --line'],
    answer: 'git log --oneline',
    explanation: '',
    quiz_id: 0
  },
  {
    questionText: 'git log --oneline is simple, but too simple, which flag will add more information without adding more lines?',
    choices: ['--decorate', '--colorize', '--jazz', '--bedazzle'],
    answer: '--decorate',
    explanation: '',
    quiz_id: 0
  },
  {
    questionText: 'What is the git log option that displays the number of insertians and deletions to each file altered by eac commit?',
    choices: ['-i', '--oneline', '-p', '--stat'],
    answer: '--stat',
    explanation: '',
    quiz_id: 0
  },
  {
    questionText: 'What is the git log option that shows you the actual changes committed?',
    choices: ['-i', '--oneline', '-p', '--stat'],
    answer: '-p',
    explanation: '',
    quiz_id: 0
  },
  {
    questionText: 'What option and argument ("keyword") allows you to search a git log by a keyword',
    choices: [
      'git log --keyword "keyword"',
      'git log --keyword keyword',
      'git log -S "keword"',
      'git log -S ["keyword"]'
    ],
    answer: '',
    explanation: '',
    quiz_id: 0
  },
  {
    questionText : 'What\'s the git command that downloads your repository from GitHub to your computer?',
    choices: [
      'git push',
      'git clone',
      'git commit'
    ],
    answer: 'git clone',
    explanation: 'git clone is a Git command line utility which is used to target an existing repository and create a clone, or copy of the target repository. ... Cloning a local or remote repository. Cloning a bare repository. Using shallow options to partially clone repositories.',
    quiz_id : 3
  },
  {
    questionText : 'How do you create a copy of a lab under your own GitHub account so that you can solve the lab?',
    choices: [
      'Forking it via the GitHub interface',
      'git fork', 'git clone',
      'git pull-request'
    ],
    answer: 'Forking it via the GitHub interface',
    explanation: 'When you fork a project in order to propose changes to the original repository, you can configure Git to pull changes from the original, or upstream, repository into the local clone of your fork. ... Under the repository name, click Clone or download.',
    quiz_id : 3
  },
  {
    questionText : 'What\'s the opposite of git clone, instead of downloading your code from GitHub, uploads your changes and code back to GitHub?',
    choices : [
      'git push',
      'git add',
      'git upload',
      'git status'
    ],
    answer: 'git push',
    explanation: 'Pushing to a remote. Use git push to push commits made on your local branch to a remote repository. The git push command takes two arguments: ... A branch name, for example, master.',
    quiz_id : 3
  },
  {
    questionText : 'How do you check the state of your local git repository since your last commit?',
    choices : [
      'git check',
      'git status',
      'git commit',
      'git diff'],
    answer: 'git status',
    explanation: 'The git status command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven\'t, and which files aren\'t being tracked by Git',
    quiz_id : 3
  },
  {
    questionText : 'How do you stage files for a commit?',
    choices : [
    'git stage',
    'git commit',
    'git add',
    'git reset'
    ],
    answer: 'git add',
    explanation: 'The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn\'t really affect the repository in any significant way—changes are not actually recorded until you run git commit.',
    quiz_id : 3
  },
  {
    questionText : 'How do you save the current state of your code into the git version control?',
    choices : [
      'By committing the staged changes with git commit',
      'By adding all changes and staging them with git stage',
      'By adding all changes and staging them with git add',
      'By creating a new commit with git init\'s'
    ],
    answer: 'By committing the staged changes with git commit',
    explanation: 'git commit commits the files in the index to the repository, git commit -a is a shortcut to add all the modified tracked files to the index first. git push sends all the pending changes to the remote repository to which your branch is mapped',
    quiz_id : 3
  },
  {
    questionText: 'What\'s a shortcut to staging all the changes you have?',
    choices: [
      'git commit add .',
      'git commit',
      'git add',
      'git push -am \'Message\''
     ],
    answer: 'git add .' ,
    explanation: 'The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn\'t really affect the repository in any significant way—changes are not actually recorded until you run git commit .',
    quiz_id : 3
  },
  {
    questionText: 'How do you supply a commit message to a commit?',
    choices: [
      'git message \'Im coding\'',
      'git add \'Im coding\'',
      'git commit \'Im coding\'',
      'git commit -m \'Im coding\''
    ],
    answer: 'git commit -m \'Im coding\'',
    explanation: 'The -m is for message, and is important to show difference in a commit history',
    quiz_id : 3
  },
  {
    questionText: 'What comes first, staging with git add . or committing with git commit?',
    choices : [
      'Staging your commits with git add',
      'Committing with git commit'
    ],
    answer: 'staging your commits with git add',
    explanation: 'add then commit',
    quiz_id : 3
  },
  {
    questionText: 'To create a Git repository, which command do you run?',
    choices : [
      'git create <project-name>',
      'git new  git new <project-name>',
      'git init'
    ],
    answer: 'git init',
    explanation: 'The git init command creates a new Git repository. It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository',
    quiz_id: 3
  },
  {
    questionText : 'How do you view your remote links?',
    choices : [
      'git status',
      'git merge (branch)',
      'git remote -v', 'git stash'
    ],
    answer: 'git remote -v',
    explanation: 'git remote -v allows you to view your remote links.',
    quiz_id :  4
  },
  {
    questionText : 'How do you save work that has not been commited?',
    choices : ['git status', 'git stash', 'git init', 'git pull'],
    answer: 'git stash',
    explanation: 'git stash saves work that you will return to later.',
    quiz_id :  4
  },
  {
    questionText : 'How do you quit a list mode generated by git?',
    choices : [
      ':q!',
       'control + c',
       'q',
       'quit'
    ],
    answer: ':q!',
    explanation: 'The correct command is :q! .',
    quiz_id : 4
  },
  {
    questionText : 'What is the purpose of git status?',
    choices : [
      'Check the status',
      'Check your git',
      'Check your branch',
      'Check files change or different'
    ],
    answer: 'Check files change or different',
    explanation: 'git status is the command that checks what files have been changed and or different in a branch.',
    quiz_id :  4
  },
  {
    questionText : 'What are merge conflicts?',
    choices : [
      'conflicting merge',
      'merge issues',
      'conflicting lines of code',
      'merge conflict -?'
    ],
    answer: 'conflicting lines of code',
    explanation: 'Merge conflicts occur when you are merging two branches together that contain lines of code that have been changed or are on the same line.',
    quiz_id :  4
  },
  {
    questionText : 'How do you create another branch while currently inside another branch?',
    choices : [
      'git checkout -b',
      'git status',
      'git checkout (branch name)',
      'git pull'
    ],
    answer: 'git checkout -b',
    explanation: 'To create another branch while inside a current branch, the command is git checkout -b.',
    quiz_id :  4
  },
  {
    questionText : 'How should you retrieve code from git?',
    choices : [
      'git pull',
      'git the code',
      'git retrieve',
      'git code'
    ],
    answer: 'git pull',
    explanation: 'You can retrieve code by git pull command or git fetch. Git pull command pulls the code from a specified branch.',
    quiz_id :  4
  },
  {
    questionText : 'Why do I have to commit or stash before I switch branches?',
    choices : [
      'It\'s one of git rules',
      'To save code I\'ve changed',
      'To get the most updated code',
      'not sure'
    ],
    answer: 'To save the code I\'ve changed.',
    explanation: 'Git does not allow you to switch brances without either saving your code \'git commit -m\' or saving your code with \'git stash\'. If you do not wish to commit or stash, you can reset your head with a soft or hard reset.',
    quiz_id :  4
  },
  {
    questionText : 'How do you update your repo with the most recent code you have locally?',
    choices : [
      'git fetch',
      'git checkout',
      'git code',
      'git push'
    ],
    answer: 'git push',
    explanation: 'git push will the most recent code to your repo and update your repo.',
    quiz_id :  4
  },
  {
    questionText : 'How should you add changed files?',
    choices : [
      'git add (file name(s))',
      'git add .',
      'git add files',
      'git add --'
    ],
    answer: 'git add (file names(s))',
    explanation: 'You should always add file(s) individually. git add . adds all files, this can cause merge conflicts by adding files to a project that you do not need.',
    quiz_id :  4
  }

];

export const quizzes: IQuiz[] = [

  {
    id: 0,
    category: 'quiz',
    difficulty: 'medium',
    name: 'Git Log'
  },
  {
    id: 3,
    category: 'quiz',
    difficulty: 'easy',
    name: 'Git Introduction'
  },
  {
    id: 4,
    category: 'quiz',
    difficulty: 'easy',
    name: 'Git Essentials'
  }
];
