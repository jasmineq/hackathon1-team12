import { IQuestion } from './question.model';

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
  }
];
