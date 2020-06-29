export class QuizQuestion {
    private _question: string;
    private _answer1: string;
    private _answer2: string;
    private _answer3: string;
    private _answer4: string;
    private _correctAnswer: number;

    constructor(question: string,
                ans1: string,
                ans2: string,
                ans3: string,
                ans4: string,
                correctAns: number) {
        this._question = question;
        this._answer1 = ans1;
        this._answer2 = ans2;
        this._answer3 = ans3;
        this._answer4 = ans4;
        this._correctAnswer = correctAns;
                }
    public get question(): string {
        return this._question;
    }

    public get answer1(): string {
        return this._answer1;
    }

    public get answer2(): string {
        return this._answer2;
    }

    public get answer3(): string {
        return this._answer3;
    }

    public get answer4(): string {
        return this._answer4;
    }

    public get correctAnswer(): number {
        return this._correctAnswer;
    }
}

export class TrueFalseQuestion extends QuizQuestion {
    constructor(question) {
        super(question, "TRUE", "FALSE", null, null, 1);
    }
}


let quizQuestion = new QuizQuestion("which framework is using Typescript",
"React",
"Vue",
"Angular",
"Cycle",
3)

function formatQuestion(quizQuestion: QuizQuestion) {
    console.log(quizQuestion.question);
    console.log(`1. ${quizQuestion.answer1}`);
    console.log(`2. ${quizQuestion.answer2}`);
    console.log(`3. ${quizQuestion.answer3}`);
    console.log(`4. ${quizQuestion.answer4}`);
}

formatQuestion(quizQuestion);

// after formatting, we get in the console, 4 outputs (2 are null) instead of 2
// the reason is that the formatQuestion function which expected an instance of QuizQuestion behaved
// differently for an instance of QuizQuestion subclass, the TrueFalseQuestion class
// This is a violation of the LSK principle
let trueFalseQuestion = new TrueFalseQuestion("TS is a superset of JS")
formatQuestion(trueFalseQuestion);

// The solution is not to be tempted to use inheritance to define the TrueFalseQuestion, even though is looks like a 
// QuizQuestion and follows the IS-A part of inheritance