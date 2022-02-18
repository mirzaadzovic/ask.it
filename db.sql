CREATE DATABASE ask_it;
\c ask_it

CREATE TABLE users(
    userId BIGSERIAL CONSTRAINT pk_users PRIMARY KEY,
    email VARCHAR(30) NOT NULL UNIQUE,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    passwordHash TEXT NOT NULL,
    passwordSalt TEXT NOT NULL,
    registrationDate timestamp with time zone,
    avatarUrl TEXT
);

CREATE TABLE questions(
    questionId BIGSERIAL CONSTRAINT pk_questions PRIMARY KEY,
    questionText TEXT NOT NULL,
    questionDate timestamp with time zone,
    userId INTEGER,
    CONSTRAINT fk_questions FOREIGN KEY(userId) REFERENCES users(userId)
);

CREATE TABLE answers(
    answerId BIGSERIAL CONSTRAINT PK_answers PRIMARY KEY,
    questionId INTEGER NOT NULL, 
    userId INTEGER NOT NULL, 
    answerText TEXT NOT NULL,
    answerDate timestamp with time zone,
    CONSTRAINT FK_answers_question FOREIGN KEY(questionId) REFERENCES questions(questionId),
    CONSTRAINT FK_answers_user FOREIGN KEY(userId) REFERENCES users(userId)
);

CREATE TABLE reactions(
    userId INTEGER, 
    questionId INTEGER, 
    isLike BOOLEAN NOT NULL,
    reactionDate timestamp with time zone,
    CONSTRAINT FK_reactions_user FOREIGN KEY(userId) REFERENCES users(userId),
    CONSTRAINT FK_reactions_question FOREIGN KEY(questionId) REFERENCES questions(questionId),
    CONSTRAINT pk_reactions PRIMARY KEY(userId, questionId)
);

CREATE TABLE answerReactions(
    userId INTEGER, 
    answerId INTEGER, 
    isLike BOOLEAN NOT NULL,
    reactionDate timestamp with time zone,
    CONSTRAINT FK_areactions_user FOREIGN KEY(userId) REFERENCES users(userId),
    CONSTRAINT FK_areactions_question FOREIGN KEY(answerId) REFERENCES answers(answerId),
    CONSTRAINT pk_areactions PRIMARY KEY(userId, answerId)
);

INSERT INTO users (email, firstName, lastName, registrationDate)
VALUES 
('ado@gegaj.com', 'Ado', 'Gegaj', '21-01-2022'),
('izoni@gegaj.com', 'Izoni', 'Gegaj', '31-01-2022');

INSERT INTO questions (userId, questionText, questionDate)
VALUES 
(1, 'Je l ravno', '18-02-2022'),
(2, 'đes ookoooo', '18-02-2022');
