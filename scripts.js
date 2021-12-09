// Programmer: Chauntel Atchley Cully
// Objective: Create a Short story NodeJS Program by using NPM Chalk Package.
            //This is to understand the fundamentals of pulling from a library 
// Date Created: 12/8/2021

// Create the Import dependencies from Chalk
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation'; // Tried to use the chalkAnimation but would not work 
import gradient from 'gradient-string';
const log = console.log; // Create a constant log var to easily call console.log

//#region Test code
// log(chalk.rgb(15, 100, 204).inverse('Hello world!'));

// log(chalk.rgb(146, 218, 76)('HTML Color Codes'));

// log(gradient('cyan', 'green', 'red')('Hello rainbow!'))
//#endregion

// Use the different styles to create your short story. 
// Also used nested styles 
log(gradient(['#92DA4C', '#009900'])('\t\t\t\t       A Mouse Tale\n'))
log(chalk.rgb(0, 153, 0)('There was once a mouse named', (chalk.hex(['#92DA4C'])('Rilo')), ', who lived just outside a kingdom of rats.'),
    gradient(['#009900', '#66BF00', '#BFA000', '#B70000'])('\nOne fateful day. The rats invaded their small town capturing some, including Rilo and his wife. \nMurdering off the rest while leaving only ashes behind.'),
    chalk.rgb(0, 153, 0)('', (chalk.hex(['#92DA4C'])('\nRilo')), 'awoke, finding himself inside a dungeon and a loaf of bread with a', (chalk.hex(['#E4C407'])('key')), 'inside.'),
    chalk.rgb(0, 153, 0)('\nHe quickly realised his goal was to escape the rats prison and find his wife by being', (chalk.hex(['#037DCC'])('stealthy,')), (chalk.hex(['#3FAEF5'])('agile')), 'and', (chalk.hex(['#7FCCED'])('smart!'))),
    chalk.rgb(0, 153, 0)('\nWith the help of the allies and friends along the way he was able to escape and finally find his', chalk.hex(['#DE4949'])('lovely wife.')),
    gradient(['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'])('\n\n\t\t\t\tBy Chauntel Atchley Cully'))

