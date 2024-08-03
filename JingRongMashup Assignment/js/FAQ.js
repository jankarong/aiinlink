document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const faqItems = document.querySelectorAll('.faq-item');
    console.log(`Found ${faqItems.length} FAQ items`);

    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        console.log(`FAQ item ${index + 1}: Question: ${question ? 'found' : 'not found'}, Answer: ${answer ? 'found' : 'not found'}`);

        question.addEventListener('click', () => {
            console.log(`Question ${index + 1} clicked`);
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            console.log(`Current expanded state: ${isExpanded}`);

            // Close all items
            faqItems.forEach(otherItem => {
                const otherQuestion = otherItem.querySelector('.faq-question');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                otherQuestion.setAttribute('aria-expanded', 'false');
                otherAnswer.hidden = true;
            });

            // Toggle current item
            if (!isExpanded) {
                question.setAttribute('aria-expanded', 'true');
                answer.hidden = false;
                console.log(`Expanded question ${index + 1}`);
            } else {
                console.log(`Closed question ${index + 1}`);
            }
        });
    });
}); 