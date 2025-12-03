// Data Object containing assignment details
const assignmentData = {
    "major1": {
        title: "Research Proposal",
        description: "The goal of this assignment was to develop a clear line of inquiry for the semester. It required identifying a critical conversation, choosing research methods, and creating a timeline. This assignment was important because it laid the foundation for the final research paper by ensuring the topic was viable and the methods were ethical and appropriate.",
        summary: "For this assignment, I proposed a study on commit messages within GitHub repositories. I planned to use genre analysis to compare the structure and function of commit messages across three different projects: a solo project, a mid-sized project, and a large organization-maintained project. I outlined my research questions regarding how project governance affects communication styles.",
        link: "[Placeholder: Link to Research Proposal Document]"
    },
    "major2": {
        title: "Annotated Bibliography",
        description: "The goal of this assignment was to curate and evaluate six secondary sources relevant to the research topic. The criteria involved summarizing each source and justifying its credibility and relevance. This assignment was crucial for building a theoretical framework and understanding the existing conversation around the topic.",
        summary: "For this assignment, I selected six sources, including three scholarly articles. I focused on sources discussing 'Genre Analysis' (Luzón), 'Commit Message Quality' (Tian et al.), and software repository mining. I wrote annotations that summarized their findings and explained how they supported my study of commit messages as a specific genre of technical communication.",
        link: "[Placeholder: Link to Annotated Bibliography Document]"
    },
    "minor1": {
        title: "Reading Response 4 (Exigency)",
        description: "The goal of this assignment was to engage with Quentin Vieregge's text on 'Exigency' and discuss strategies for making writing indispensable to a reader. It required analyzing different rhetorical strategies and reflecting on personal writing experiences.",
        summary: "For this assignment, I discussed the concept of FOMO (Fear of Missing Out) as a strategy for invoking exigency, particularly in advertising. I also analyzed how I adopted a persona to find interest in history assignments and discussed 'The Anxious Generation' as a text that creates strong exigency. I noted how Vieregge uses the classroom setting to create exigency for students.",
        link: "[Placeholder: Link to Reading Response 4]"
    },
    "minor2": {
        title: "Reading Response 5 (Source Hunting)",
        description: "The goal of this assignment was to analyze readings by Harrington and Purdy regarding credibility and source usage. It challenged traditional myths about 'bad' sources like Wikipedia and non-academic texts.",
        summary: "For this assignment, I explored how credibility is established outside of academia, citing longform journalism and food science blogs as examples that use transparency rather than formal citations. I also discussed how my perspective on Wikipedia shifted, viewing it now as a tool for generating keywords and finding links rather than a forbidden source.",
        link: "[Placeholder: Link to Reading Response 5]"
    },
    "minor3": {
        title: "ePortfolio Check-In #1",
        description: "The goal of this assignment was to reflect on the course outcomes early in the semester and determine the platform for the ePortfolio. It served as an initial step in metacognitive thinking about the course goals.",
        summary: "For this assignment, I defined the six course outcomes in my own words, identifying 'Generating Inquiry' and 'Revision' as key skills. I decided to use Google Sites for my portfolio (though I later transitioned to a custom coded site) and articulated that the portfolio's purpose is to showcase the process of learning, not just the final product.",
        link: "[Placeholder: Link to Check-In 1]"
    },
    "minor4": {
        title: "ePortfolio Check-In #3",
        description: "The goal of this assignment was to analyze an external professional portfolio to understand effective web design and communication. The criteria involved identifying strengths and weaknesses in layout and content.",
        summary: "For this assignment, I analyzed Tom Scott's website. I noted that its simplicity and focus on function over flash made it effective. I highlighted his clear navigation and consistent voice as strengths, while suggesting that more visual cues for projects could improve the user experience.",
        link: "[Placeholder: Link to Check-In 3]"
    },
    "minor5": {
        title: "Research Proposal Revision Plan",
        description: "The goal of this assignment was to organize peer feedback received on the Research Proposal and create a concrete plan for revision. This assignment was important for practicing the 'Revision' course outcome.",
        summary: "For this assignment, I categorized peer feedback into 'Use' and 'Discard'. I decided to use feedback regarding simplifying jargon and adding a glossary, as well as connecting the topic more to writing studies. I decided not to change my core research question despite a suggestion, as I felt it was too late to pivot the entire direction.",
        link: "[Placeholder: Link to Revision Plan]"
    },
    "minor6": {
        title: "Analyzing Research Methods",
        description: "The goal of this extra credit assignment was to identify and analyze a research method used in a pop-culture context. It involved summarizing the process and evaluating its strengths and weaknesses.",
        summary: "For this assignment, I analyzed Sherlock Holmes and his method of deduction. I explained how he observes minute details to make large inferences. I noted that while his ability to deduce information is a strength, a weakness is the potential for error when deducing from incomplete data, suggesting he should allow for more uncertainty.",
        link: "[Placeholder: Link to Extra Credit Assignment]"
    }
};

// Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('assignment-modal');
    const closeBtn = document.querySelector('.close-modal');
    const showMoreBtns = document.querySelectorAll('.show-more');

    // Elements to update inside modal
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalSummary = document.getElementById('modal-summary');
    const modalLink = document.getElementById('modal-link');

    // Open Modal
    showMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const assignmentId = btn.getAttribute('data-id');
            const data = assignmentData[assignmentId];

            if (data) {
                modalTitle.textContent = data.title;
                modalDesc.textContent = data.description;
                modalSummary.textContent = data.summary;
                modalLink.setAttribute('href', data.link); // In a real scenario, this would be a real URL

                // Show modal
                modal.style.display = 'block';
            }
        });
    });

    // Close Modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close if clicked outside content
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});