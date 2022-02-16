CREATE DATABASE ask_it;
\c ask_it

CREATE TABLE users(
    id BIGSERIAL CONSTRAINT pk_users PRIMARY KEY,
    email VARCHAR(30),
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    passwordHash TEXT,
    passwordSalt TEXT,
    registrationDate TIMESTAMP,
    avatarUrl TEXT
);

CREATE TABLE questions(
    id BIGSERIAL CONSTRAINT pk_questions PRIMARY KEY,
    questionText TEXT NOT NULL,
    questionDate TIMESTAMP,
    userId INTEGER,
    CONSTRAINT fk_questions FOREIGN KEY(userId) REFERENCES users(userId)
);

CREATE TABLE answers(
    questionId INTEGER, 
    userId INTEGER, 
    answerText TEXT NOT NULL,
    answerDate TIMESTAMP,
    CONSTRAINT FK_answers_question FOREIGN KEY(questionId) REFERENCES questions(id),
    CONSTRAINT FK_answers_user FOREIGN KEY(userId) REFERENCES users(id),
    CONSTRAINT pk_answers PRIMARY KEY(questionId, userId) 
);

CREATE TABLE reactions(
    userId INTEGER, 
    questionId INTEGER, 
    isLike BOOLEAN NOT NULL,
    reactionDate TIMESTAMP,
    CONSTRAINT FK_reactions_user FOREIGN KEY(userId) REFERENCES users(id),
    CONSTRAINT FK_reactions_question FOREIGN KEY(questionId) REFERENCES questions(id),
    CONSTRAINT pk_reactions PRIMARY KEY(userId, questionId)
);
