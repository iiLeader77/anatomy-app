import React, { useState } from 'react';

const AnatomyApp = () => {
  const [page, setPage] = useState('organs');
  const [selectedOrgan, setSelectedOrgan] = useState(null);
  const [level, setLevel] = useState(null);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);

  const organs = {
    brain: {
      name: 'Brain',
      image: 'brain.png',
      quizzes: {
        beginner: [
          {
            question: "What is the main function of the brain?",
            options: [
              { text: "Pumps blood", correct: false },
              { text: "Controls thoughts and movements", correct: true },
              { text: "Filters air", correct: false }
            ]
          },
          {
            question: "Where is the brain located?",
            options: [
              { text: "In the skull", correct: true },
              { text: "In the chest", correct: false },
              { text: "In the stomach", correct: false }
            ]
          },
          {
            question: "What does the brain need to work?",
            options: [
              { text: "Oxygen and nutrients", correct: true },
              { text: "Only water", correct: false },
              { text: "Only sugar", correct: false }
            ]
          },
          {
            question: "What helps protect the brain?",
            options: [
              { text: "The ribs", correct: false },
              { text: "The spine", correct: false },
              { text: "The skull", correct: true }
            ]
          },
          {
            question: "Which activity uses your brain?",
            options: [
              { text: "Only sleeping", correct: false },
              { text: "Thinking and learning", correct: true },
              { text: "Only eating", correct: false }
            ]
          }
        ],
        intermediate: [
          {
            question: "Which part of the brain controls balance?",
            options: [
              { text: "Cerebellum", correct: true },
              { text: "Frontal lobe", correct: false },
              { text: "Temporal lobe", correct: false }
            ]
          },
          {
            question: "What protects the brain besides the skull?",
            options: [
              { text: "Blood only", correct: false },
              { text: "Air", correct: false },
              { text: "Cerebrospinal fluid", correct: true }
            ]
          },
          {
            question: "Which side of the brain controls the left side of your body?",
            options: [
              { text: "Right hemisphere", correct: true },
              { text: "Left hemisphere", correct: false },
              { text: "Both sides equally", correct: false }
            ]
          },
          {
            question: "What is the brain made of?",
            options: [
              
              { text: "Muscle tissue", correct: false },
              { text: "Billions of neurons", correct: true },
              { text: "Bone cells", correct: false }
            ]
          },
          {
            question: "What covers and protects the brain?",
            options: [
              
              { text: "Skin", correct: false },
              { text: "Hair", correct: false },
              { text: "Meninges", correct: true }
            ]
          }
        ],
        advanced: [
          {
            question: "Which part of the brain controls basic life functions?",
            options: [
              
              { text: "Cerebrum", correct: false },
              { text: "Brain stem", correct: true },
              { text: "Hippocampus", correct: false }
            ]
          },
          {
            question: "What type of cells support neurons in the brain?",
            options: [
              { text: "Glial cells", correct: true },
              { text: "Blood cells", correct: false },
              { text: "Bone cells", correct: false }
            ]
          },
          {
            question: "Which lobe processes visual information?",
            options: [
              { text: "Occipital lobe", correct: true },
              { text: "Temporal lobe", correct: false },
              { text: "Frontal lobe", correct: false }
            ]
          },
          {
            question: "What connects the two hemispheres of the brain?",
            options: [
              
              { text: "Brain stem", correct: false },
              { text: "Corpus callosum", correct: true },
              { text: "Cerebellum", correct: false }
            ]
          },
          {
            question: "Which brain region is crucial for forming memories?",
            options: [
              
              { text: "Brain stem", correct: false },
              { text: "Cerebellum", correct: false },
              { text: "Hippocampus", correct: true }
            ]
          }
        ]
      }
    },
    heart: {
      name: 'Heart',
      image: 'heart.png',
      quizzes: {
        beginner: [
          {
            question: "What does the heart do?",
            options: [
              { text: "Pumps blood", correct: true },
              { text: "Thinks", correct: false },
              { text: "Digests food", correct: false }
            ]
          },
          {
            question: "Where is the heart located?",
            options: [
              { text: "In the chest", correct: true },
              { text: "In the head", correct: false },
              { text: "In the stomach", correct: false }
            ]
          },
          {
            question: "What does the heart pump?",
            options: [
              
              { text: "Air", correct: false },
              { text: "Water", correct: false },
              { text: "Blood", correct: true }
            ]
          },
          {
            question: "What makes a heartbeat sound?",
            options: [
              
              { text: "Blood flowing", correct: false },
              { text: "Lungs breathing", correct: false },
              { text: "Heart valves closing", correct: true }
            ]
          },
          {
            question: "How does exercise affect your heart?",
            options: [
              { text: "Makes it beat faster", correct: true },
              { text: "Makes it stop", correct: false },
              { text: "Doesn't affect it", correct: false }
            ]
          }
        ],
        intermediate: [
          {
            question: "How many chambers does the heart have?",
            options: [
              
              { text: "Two", correct: false },
              { text: "Three", correct: false },
              { text: "Four", correct: true }
            ]
          },
          {
            question: "What are the upper chambers called?",
            options: [
              
              { text: "Ventricles", correct: false },
              { text: "Atria", correct: true },
              { text: "Valves", correct: false }
            ]
          },
          {
            question: "What are the lower chambers called?",
            options: [
              { text: "Ventricles", correct: true },
              { text: "Atria", correct: false },
              { text: "Arteries", correct: false }
            ]
          },
          {
            question: "What carries blood away from the heart?",
            options: [
              { text: "Arteries", correct: true },
              { text: "Veins", correct: false },
              { text: "Capillaries", correct: false }
            ]
          },
          {
            question: "What brings blood back to the heart?",
            options: [
              
              { text: "Arteries", correct: false },
              { text: "Veins", correct: true },
              { text: "Valves", correct: false }
            ]
          }
        ],
        advanced: [
          {
            question: "What type of muscle is the heart made of?",
            options: [
              
              { text: "Smooth muscle", correct: false },
              { text: "Cardiac muscle", correct: true },
              { text: "Skeletal muscle", correct: false }
            ]
          },
          {
            question: "Which blood vessels are the smallest?",
            options: [
              
              { text: "Arteries", correct: false },
              { text: "Capillaries", correct: true },
              { text: "Veins", correct: false }
            ]
          },
          {
            question: "What controls the heart's rhythm?",
            options: [
              { text: "SA node", correct: true },
              { text: "Brain", correct: false },
              { text: "Lungs", correct: false }
            ]
          },
          {
            question: "What type of blood do pulmonary veins carry?",
            options: [
              { text: "Oxygenated blood", correct: true },
              { text: "Deoxygenated blood", correct: false },
              { text: "Mixed blood", correct: false }
            ]
          },
          {
            question: "Which artery carries blood to the body?",
            options: [
              
              { text: "Pulmonary artery", correct: false },
              { text: "Coronary artery", correct: false },
              { text: "Aorta", correct: true }
            ]
          }
        ]
      }
    },
    lungs: {
      name: 'Lungs',
      image: 'lung.png',
      quizzes: {
        beginner: [
          {
            question: "What do lungs help you do?",
            options: [
              { text: "Breathe", correct: true },
              { text: "Think", correct: false },
              { text: "Digest food", correct: false }
            ]
          },
          {
            question: "Where are your lungs?",
            options: [
              
              { text: "In your head", correct: false },
              { text: "In your chest", correct: true },
              { text: "In your stomach", correct: false }
            ]
          },
          {
            question: "What do lungs take in?",
            options: [
              
              { text: "Food", correct: false },
              { text: "Air", correct: true },
              { text: "Water", correct: false }
            ]
          },
          {
            question: "How many lungs do you have?",
            options: [
              { text: "Two", correct: true },
              { text: "One", correct: false },
              { text: "Three", correct: false }
            ]
          },
          {
            question: "What protects your lungs?",
            options: [
              
              { text: "Skull", correct: false },
              { text: "Spine", correct: false },
              { text: "Ribs", correct: true }
            ]
          }
        ],
        intermediate: [
          {
            question: "What gas do lungs take from the air?",
            options: [
              { text: "Oxygen", correct: true },
              { text: "Carbon dioxide", correct: false },
              { text: "Nitrogen", correct: false }
            ]
          },
          {
            question: "What gas do lungs remove from your body?",
            options: [
              
              { text: "Oxygen", correct: false },
              { text: "Carbon dioxide", correct: true },
              { text: "Nitrogen", correct: false }
            ]
          },
          {
            question: "What connects your mouth to your lungs?",
            options: [
              
              { text: "Esophagus", correct: false },
              { text: "Trachea", correct: true },
              { text: "Blood vessels", correct: false }
            ]
          },
          {
            question: "What muscle helps you breathe?",
            options: [
              { text: "Diaphragm", correct: true },
              { text: "Biceps", correct: false },
              { text: "Heart", correct: false }
            ]
          },
          {
            question: "What are the tiny air sacs in lungs called?",
            options: [
              { text: "Alveoli", correct: true },
              { text: "Bronchi", correct: false },
              { text: "Capillaries", correct: false }
            ]
          }
        ],
        advanced: [
          {
            question: "What membrane covers the lungs?",
            options: [
              { text: "Pleura", correct: true },
              { text: "Peritoneum", correct: false },
              { text: "Pericardium", correct: false }
            ]
          },
          {
            question: "What are the branches of the trachea called?",
            options: [
              
              { text: "Alveoli", correct: false },
              { text: "Capillaries", correct: false },
              { text: "Bronchi", correct: true }
            ]
          },
          {
            question: "What type of tissue helps lungs stretch?",
            options: [
              
              { text: "Muscle tissue", correct: false },
              { text: "Bone tissue", correct: false },
              { text: "Elastic tissue", correct: true }
            ]
          },
          {
            question: "What controls breathing rate?",
            options: [
              { text: "Medulla oblongata", correct: true },
              { text: "Cerebellum", correct: false },
              { text: "Hypothalamus", correct: false }
            ]
          },
          {
            question: "What process happens in alveoli?",
            options: [
              
              { text: "Blood production", correct: false },
              { text: "Gas exchange", correct: true },
              { text: "Food digestion", correct: false }
            ]
          }
        ]
      }
    }
  };

  const handleAnswer = (correct) => {
    if (correct) {
      if (currentQuiz < 4) {
        setCurrentQuiz(currentQuiz + 1);
        setScore(score + 1);
      } else {
        alert(`Quiz completed! Score: ${score + 1}/5`);
        setPage('organs');
        setCurrentQuiz(0);
        setScore(0);
        setLevel(null);
        setSelectedOrgan(null);
      }
    } else {
      alert('Incorrect! Try again.');
    }
  };

  const OrganSelect = () => (
    <div className="p-8">
      <h1 className="text-4xl text-blue-600 text-center mb-8">Choose an Organ to Study</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(organs).map(([id, organ]) => (
          <div 
            key={id}
            onClick={() => {
              setSelectedOrgan(id);
              setPage('levels');
            }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
          >
            <img 
              src={organ.image} 
              alt={organ.name}
              className="w-40 h-40 mx-auto mb-4 object-contain"
            />
            <h2 className="text-xl text-blue-600 text-center">{organ.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );

  const LevelSelect = () => (
    <div className="p-8 text-center">
      <h2 className="text-3xl text-blue-600 mb-8">{organs[selectedOrgan].name} Quiz</h2>
      <div className="space-y-4">
        {['beginner', 'intermediate', 'advanced'].map((levelName) => (
          <button
            key={levelName}
            onClick={() => {
              setLevel(levelName);
              setPage('quiz');
            }}
            className={`w-64 p-4 rounded-lg capitalize
              ${levelName === 'beginner' ? 'bg-green-100 hover:bg-green-200' :
                levelName === 'intermediate' ? 'bg-blue-100 hover:bg-blue-200' :
                'bg-purple-100 hover:bg-purple-200'}`}
          >
            {levelName} Level
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          setPage('organs');
          setSelectedOrgan(null);
        }}
        className="mt-8 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
      >
        Back to Organs
      </button>
    </div>
  );

  const Quiz = () => {
    const quiz = organs[selectedOrgan].quizzes[level][currentQuiz];
    
    return (
      <div className="p-8 max-w-2xl mx-auto">
        <div className="text-center mb-4">
          <span className="bg-blue-100 px-4 py-2 rounded">
            Question {currentQuiz + 1}/5
          </span>
          <span className="ml-4 bg-green-100 px-4 py-2 rounded">
            Score: {score}
          </span>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-xl mb-4">{quiz.question}</p>
          <div className="space-y-3">
            {quiz.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.correct)}
                className="w-full p-3 text-left border rounded-lg hover:bg-blue-50"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            setPage('organs');
            setCurrentQuiz(0);
            setScore(0);
            setLevel(null);
            setSelectedOrgan(null);
          }}
          className="mt-4 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
        >
          Quit Quiz
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {page === 'organs' && <OrganSelect />}
      {page === 'levels' && <LevelSelect />}
      {page === 'quiz' && <Quiz />}
      
      <footer className="fixed bottom-0 w-full p-4 bg-white border-t text-center">
        <p>Al Andalus Private Schools - Programmed by: Aleen Fares</p>
      </footer>
    </div>
  );
};

export default AnatomyApp;