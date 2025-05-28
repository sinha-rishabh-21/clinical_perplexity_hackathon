# TrialSights: Investment Intelligence for Clinical Trials

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Perplexity Sonar API Hackathon](https://img.shields.io/badge/Perplexity%20Sonar%20API-Hackathon-blue)](https://sonar.perplexity.ai/)

**[Watch Demo](https://youtu.be/11_evsWdzNk)** | **[View Live Project](https://trialsights.vercel.app/)**

## Overview

TrialSights is an AI-powered platform developed to support investors, researchers, and healthcare professionals in the evaluation of clinical trial opportunities. By integrating advanced language models, TrialSights delivers concise, accurate, and current insights into clinical trials, thereby facilitating more informed decision-making processes.

## Problem Statement

The evaluation of clinical trial investments is often hindered by:

* The extensive volume of data distributed across numerous registries and publications, making the extraction of pertinent information challenging.
* The presentation of raw data in traditional databases, which often lacks the contextual analysis required for strategic investment decisions.
* The time investment associated with manual data review, which can lead to inefficiencies and potential oversights.

## Solution

TrialSights addresses these challenges through the following functionalities:

* **Data Aggregation:** Centralizing information from diverse clinical trial registries and publications.
* **AI-Driven Summarization:** Employing advanced AI models to generate succinct summaries of trial details.
* **Interactive Inquiry:** Providing a conversational interface for users to query and receive specific information.
* **Investment-Focused Insights:** Highlighting critical factors such as trial phase, sponsor reputation, and potential market impact.

## Technology Stack

* **Frontend:** React.js, styled with Tailwind CSS
* **Backend:** Node.js with the Express.js framework
* **AI Integration:** Perplexity AI Sonar API
* **Data Storage:** MongoDB

## Perplexity Sonar API Integration

The Perplexity Sonar API was selected for its:

* **Domain Specificity:** Optimized for biomedical and clinical trial data, ensuring a higher degree of accuracy in interpretations.
* **Real-Time Processing:** Capability to process live queries and provide immediate responses.
* **Contextual Understanding:** Ability to maintain conversation history for nuanced follow-up inquiries.

The API's specialization in clinical data offers enhanced accuracy and relevance compared to general-purpose language models.

## Getting Started

### Prerequisites

* Node.js and npm must be installed on the local machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/sinha-rishabh-21/clinical_perplexity_hackathon.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd clinical_perplexity_hackathon
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Configure environment variables:
    Create a `.env` file in the root directory and define the API key:
    ```
    SONAR_API_KEY=your_api_key_here
    ```

### Running the Application

```bash
npm start
