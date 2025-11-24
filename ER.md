// //////////////////////////////////////////////////////
// users コレクション
// //////////////////////////////////////////////////////
Table users {
id string [pk] // Firebase UID
displayName string
email string
avatarUrl string
profileBio string
streak number
createdAt timestamp
lastLoginAt timestamp
}

// //////////////////////////////////////////////////////
// users/{userId}/stats
// //////////////////////////////////////////////////////
Table user_stats {
id string [pk] // userId と同じ
totalAttempts number
totalCorrect number
globalAccuracy number
lastActiveAt timestamp
preferredCategories string[] // array<string>
}

// relation
Ref: user_stats.id > users.id

// //////////////////////////////////////////////////////
// users/{userId}/bookmarks/{questionId}
// //////////////////////////////////////////////////////
Table bookmarks {
id string [pk] // questionId
user_id string [ref: > users.id]
note string
createdAt timestamp
}

// //////////////////////////////////////////////////////
// users/{userId}/recommendations
// //////////////////////////////////////////////////////
Table recommendations {
id string [pk]
user_id string [ref: > users.id]
reason string
question_ids string[] // array<string>
createdAt timestamp
expiresAt timestamp
}

// //////////////////////////////////////////////////////
// categories コレクション
// //////////////////////////////////////////////////////
Table categories {
id string [pk]
name string
description string
createdAt timestamp
}

// //////////////////////////////////////////////////////
// quizzes コレクション
// //////////////////////////////////////////////////////
Table quizzes {
id string [pk]
title string
description string
category_id string [ref: > categories.id]
question_count number
createdBy string [ref: > users.id]
public boolean
createdAt timestamp
}

// //////////////////////////////////////////////////////
// quizzes/{quizId}/questions コレクション
// //////////////////////////////////////////////////////
Table questions {
id string [pk]
quiz_id string [ref: > quizzes.id]
body string
explanation string
difficulty number
tags string[] // array<string>
options string[] // array<string>
media map // Firestore map
createdAt timestamp
updatedAt timestamp
}

// //////////////////////////////////////////////////////
// questions/{questionId}/comments
// //////////////////////////////////////////////////////
Table comments {
id string [pk]
question_id string [ref: > questions.id]
user_id string [ref: > users.id]
body string
likes number
createdAt timestamp
}

// //////////////////////////////////////////////////////
// attempts コレクション
// //////////////////////////////////////////////////////
Table attempts {
id string [pk]
user_id string [ref: > users.id]
quiz_id string [ref: > quizzes.id]
startedAt timestamp
finishedAt timestamp
score number
correctCount number
totalCount number
duration number
mode string
createdAt timestamp
}

// //////////////////////////////////////////////////////
// attempts/{attemptId}/questionAttempts
// //////////////////////////////////////////////////////
Table question_attempts {
id string [pk]
question_id string [ref: > questions.id]
attempt_id string [ref: > attempts.id]
user_id string [ref: > users.id]
selected_index number
is_correct boolean
elapsed number
createdAt timestamp
}
