# TaskTrackR



To run the Project Management Web Application locally, follow these steps:


**Clone the Repository:** git clone https://github.com/NickMuhigi/alu_web_application.git


**CD into the Project Directory:** cd alu_web_application


**Pull the Docker image from DockerHub:** docker pull alu_web_application


**Build the Docker Image:** docker build -t alu_web_application:latest . 


**Run the Docker container:** docker run -d -p 3000:3000 alu_web_application:latest

**Access the application:** Open a web browser and navigate to http://localhost:3000




# Docker Image

View Image from Docker Hub: https://hub.docker.com/layers/nickmuhigi/alu_web_application/latest/images/sha256:bab93188a5cb14aa0451cba324c8fee4223eeb98d6ba0b61d806247ccc76ff9f?tab=layers


# Assumptions or Decisions:


**Docker** The decision to use Docker could stem from organizational familiarity or industry best practices, indicating a broader trend towards containerization in the software development industry.

**Javascript** The choice of JavaScript library reflects considerations such as developer familiarity, community support, and scalability requirements, ensuring a robust foundation for the frontend development of the project management web application.

**CSS and HTML** Together, the combination of semantic HTML and CSS preprocessing enhances both the structural integrity and styling capabilities of the web application, contributing to its overall usability and maintainability.


# Presentation Slides

Find the presentation slides about my implementation on the link below:
https://www.canva.com/design/DAGBXM7740c/XcPls9G5YSd7p2sNLL48gw/edit?utm_content=DAGBXM7740c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton





