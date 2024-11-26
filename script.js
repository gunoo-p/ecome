function recordAnswer(questionId, answer) {
    gtag('event', 'quiz_answer', {
      'event_category': 'OX_Quiz',
      'event_label': questionId,
      'value': answer
    });
    console.log(`Question: ${questionId}, Answer: ${answer} sent to GA4.`);
  }