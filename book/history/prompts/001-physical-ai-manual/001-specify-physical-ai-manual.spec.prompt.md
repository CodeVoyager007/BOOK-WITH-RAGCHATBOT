---
id: 001
title: Specify Physical AI Manual
stage: spec
date: 2025-12-02
surface: agent
model: Gemini
feature: 001-physical-ai-manual
branch: 001-physical-ai-manual
user: aish-mughal\dell
command: /sp.specify
labels: [spec, documentation]
links:
  spec: specs/001-physical-ai-manual/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-physical-ai-manual/spec.md
  - specs/001-physical-ai-manual/checklists/requirements.md
tests:
  - "N/A"
---

## Prompt

/sp.specify # Project Specification: Titan - The Physical AI Manual ## 1. Overview Build a high-end educational documentation site ("The Book") teaching **Physical AI and Humanoid Robotics**. - **Tone**: Professional, Academic, and "Neo-Tech" (Futuristic Engineering). - **Goal**: Teach students how to build the "Brain" (NVIDIA Isaac), "Nervous System" (ROS 2), and "Body" (Simulation) of a robot. - **Volume**: The documentation MUST contain **31 Chapters** split across 6 Parts. ## 2. Page Structure ### A. Landing Page (`src/pages/index.tsx`) - **Hero Section**: - Headline: "Embodied Intelligence for the Next Era." - Subhead: "Master ROS 2, NVIDIA Isaac Sim, and VLA Models. From Browser to Humanoid." - Actions: "Start Learning" (Primary), "Github Repo" (Secondary). - **Curriculum Grid**: Display cards for the 4 Core Modules: 1. "The Nervous System (ROS 2)" 2. "Digital Twins (Gazebo/Unity)" 3. "The AI Brain (NVIDIA Isaac)" 4. "Vision-Language-Action (VLA)" ### B. Documentation Content (`/docs`) Generate the following Markdown (`.mdx`) files with detailed technical content (min 300 words each). **Part 1: The Awakening (Foundations)** 1. `01-foundations/01-embodied-intelligence.md`: Digital vs. Physical AI. 2. `01-foundations/02-hardware-stack.md`: Workstations (RTX GPUs) vs Edge (Jetson Orin). 3. `01-foundations/03-environment-setup.md`: Configuring Ubuntu 22.04 and Docker. 4. `01-foundations/04-linux-for-robotics.md`: Essential CLI skills for Robot Engineers. **Part 2: The Nervous System (ROS 2 Fundamentals)** 5. `02-ros2/01-architecture.md`: Nodes, Contexts, and DDS Middleware. 6. `02-ros2/02-communication.md`: Topics (Pub/Sub) and Messages. 7. `02-ros2/03-services-actions.md`: Client/Server patterns in Robotics. 8. `02-ros2/04-python-agents.md`: Writing Controllers with `rclpy`. 9. `02-ros2/05-launch-systems.md`: Managing Complex Robot Starts. 10. `02-ros2/06-debugging.md`: Using RQT and Rosbags. **Part 3: Digital Twins (Simulation)** 11. `03-sim/01-urdf-basics.md`: Unified Robot Description Format explained. 12. `03-sim/02-modeling-bipeds.md`: Designing a Humanoid Linkage. 13. `03-sim/03-gazebo-physics.md`: Gravity, Collision, and Inertia. 14. `03-sim/04-sensors.md`: Simulating LiDAR and Depth Cameras. 15. `03-sim/05-unity-bridge.md`: High-Fidelity Visualization with Unity. **Part 4: The AI Brain (NVIDIA Isaac)** 16. `04-isaac/01-omniverse-intro.md`: Introduction to USD and Isaac Sim. 17. `04-isaac/02-importing-robots.md`: Importing URDFs into Omniverse. 18. `04-isaac/03-synthetic-data.md`: Generating Training Data via Replicator. 19. `04-isaac/04-vslam.md`: Visual SLAM for Localization. 20. `04-isaac/05-navigation2.md`: Path Planning (Nav2) for Humanoids. 21. `04-isaac/06-reinforcement-learning.md`: Training Walking Policies (Isaac Gym). **Part 5: Vision-Language-Action (VLA)** 22. `05-vla/01-generative-robotics.md`: The Convergence of LLMs and Control. 23. `05-vla/02-voice-command.md`: Integrating OpenAI Whisper. 24. `05-vla/03-cognitive-planning.md`: LLMs as High-Level Planners. 25. `05-vla/04-vla-models.md`: RT-2 and PaLM-E Architecture. 26. `05-vla/05-zero-shot.md`: Controlling Robots without Training. **Part 6: The Capstone & Deployment** 27. `06-capstone/01-project-design.md`: The Autonomous Humanoid Specification. 28. `06-capstone/02-sim-to-real.md`: The Reality Gap and Domain Randomization. 29. `06-capstone/03-safety-ethics.md`: Asimov's Laws in the AI Era. 30. `06-capstone/04-deployment.md`: Flashing to Jetson Orin Nano. 31. `06-capstone/05-future.md`: What comes after Humanoids? ## 3. Visual & UI Requirements - **Theme**: "Neo-Tech" (Deep Navy Background, Electric Blue Accents, Glassmorphism). - **Navigation**: Sidebar must auto-generate from the folder structure. - **Chat Ready**: Ensure `Root.js` wrapper is planned for the Chat Widget.

## Response snapshot

Specification created for feature `001-physical-ai-manual`.
- **Branch:** `001-physical-ai-manual`
- **Specification:** `specs/001-physical-ai-manual/spec.md`
- **Checklist:** `specs/001-physical-ai-manual/checklists/requirements.md` (All checks passed)

The feature is ready for the planning phase (`/sp.plan`).

## Outcome

- ✅ Impact: A detailed specification for the "Physical AI Manual" was created, outlining the structure, content, and requirements.
- 🧪 Tests: No tests were run.
- 📁 Files: 
  - `specs/001-physical-ai-manual/spec.md`
  - `specs/001-physical-ai-manual/checklists/requirements.md`
- 🔁 Next prompts: `/sp.plan` to create a technical plan for implementation.
- 🧠 Reflection: The `create-new-feature.ps1` script is buggy and needs fixing. The agent was able to recover and complete the task by manually creating the necessary directories and files. This process adhered to the Spec-Driven Development (SDD) model, where the spec is the primary artifact.

## Evaluation notes (flywheel)

- Failure modes observed: The `create-new-feature.ps1` script failed due to PowerShell parsing issues with the long, multi-line feature description containing special characters.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Fix the `create-new-feature.ps1` script to handle complex string arguments correctly.
