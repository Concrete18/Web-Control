# Web Control

<img src="https://raw.githubusercontent.com/Concrete18/Web-Control/main/images/Phone_Preview.png" alt="Phone View Preview" width="300"/>
 
## Goal

I created this to replace my previous FastAPI only version from my original repo and to practice React and Flask.
I was unable to make that version with React which greatly limited the projects capability.

## Features

- Browser Controls such as video playback control tab switching
- Global Media Controls
- Grouped control sections

## Installation

Follow the instructions below to set up the project:

### Prerequisites

- Node.js
- Python
- [NirCmd](https://www.nirsoft.net/utils/nircmd.html) (for audio device switching)

### Clone the repository

```bash
git clone https://github.com/Concrete18/Web-Control.git
cd Web-Control
```

### Install dependencies

#### Root Directory

```bash
npm install
```

#### Frontend

```bash
cd frontend
npm install
cd ..
```

#### Backend

Optionally, create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

Install Python dependencies:

```bash
pip install -r requirements.txt
```

## Running the Project

To concurrently run both the Node Frontend and Flask Backend within the same terminal, use the following command:

```bash
npm run start
```

## Todo

- Add sidebar menu
- Add Authentication
