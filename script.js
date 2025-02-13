let data = [
  // // Root
  // {
  //   id: "Feelings",
  //   parent: "",
  //   name: "Feelings",
  //   color: "#333333"
  // },

  // Level 1 - Main emotions
  {
    id: "Fearful",
    parent: "",
    name: "Fearful",
    color: "#FADF99"
  },
  {
    id: "Angry",
    parent: "",
    name: "Angry",
    color: "#F09595"
  },
  {
    id: "Disgusted",
    parent: "",
    name: "Disgusted",
    color: "#8F8F8F"
  },
  {
    id: "Sad",
    parent: "",
    name: "Sad",
    color: "#98BDDE"
  },
  {
    id: "Happy",
    parent: "",
    name: "Happy",
    color: "#FFFE9E"
  },
  {
    id: "Surprised",
    parent: "",
    name: "Surprised",
    color: "#B8A3CE"
  },
  {
    id: "Bad",
    parent: "",
    name: "Bad",
    color: "#9FD7B1"
  },

  // Fearful branch - Level 2 & 3
  {
    id: "Scared",
    parent: "Fearful",
    name: "Scared",
    color: "#FCF0C3"
  },
  {
    id: "Helpless",
    parent: "Scared",
    name: "Helpless",
    value: 1,
    color: "#FADF99"
  },
  {
    id: "Frightened",
    parent: "Scared",
    name: "Frightened",
    value: 1,
    color: "#FADF99"
  },
  {
    id: "Anxious",
    parent: "Fearful",
    name: "Anxious",
    color: "#FCF0C3"
  },
  {
    id: "Overwhelmed",
    parent: "Anxious",
    name: "Overwhelmed",
    value: 1,
    color: "#FADF99"
  },
  {
    id: "Worried",
    parent: "Anxious",
    name: "Worried",
    value: 1,
    color: "#FADF99"
  },
  {
    id: "Insecure",
    parent: "Fearful",
    name: "Insecure",
    color: "#FCF0C3"
  },
  {
    id: "Inadequate",
    parent: "Insecure",
    name: "Inadequate",
    value: 1,
    color: "#FADF99"
  },
  {
    id: "Inferior",
    parent: "Insecure",
    name: "Inferior",
    value: 1,
    color: "#FADF99"
  },
  {
    id: "Weak",
    parent: "Fearful",
    name: "Weak",
    color: "#FCF0C3"
  },
  {
    id: "Worthless",
    parent: "Weak",
    name: "Worthless",
    value: 1,
    color: "#FADF99"
  },
  {
    id: "Insignificant",
    parent: "Weak",
    name: "Insignificant",
    value: 1,
    color: "#FADF99"
  },
  {
    id: "Rejected",
    parent: "Fearful",
    name: "Rejected",
    color: "#FCF0C3"
  },
  {
    id: "Excluded",
    parent: "Rejected",
    name: "Excluded",
    value: 1,
    color: "#FADF99"
  },
  {
    id: "Persecuted",
    parent: "Rejected",
    name: "Persecuted",
    value: 1,
    color: "#FADF99"
  },
  {
    id: "Threatened",
    parent: "Fearful",
    name: "Threatened",
    color: "#FCF0C3"
  },
  {
    id: "Nervous",
    parent: "Threatened",
    name: "Nervous",
    value: 1,
    color: "#FADF99"
  },
  {
    id: "Exposed",
    parent: "Threatened",
    name: "Exposed",
    value: 1,
    color: "#FADF99"
  },

  // Angry branch - Level 2 & 3
  {
    id: "Let down",
    parent: "Angry",
    name: "Let down",
    color: "#F5C2C0"
  },
  {
    id: "Betrayed",
    parent: "Let down",
    name: "Betrayed",
    value: 1,
    color: "#F09595"
  },
  {
    id: "Resentful",
    parent: "Let down",
    name: "Resentful",
    value: 1,
    color: "#F09595"
  },
  {
    id: "Humiliated",
    parent: "Angry",
    name: "Humiliated",
    color: "#F5C2C0"
  },
  {
    id: "Disrespected",
    parent: "Humiliated",
    name: "Disrespected",
    value: 1,
    color: "#F09595"
  },
  {
    id: "Ridiculed",
    parent: "Humiliated",
    name: "Ridiculed",
    value: 1,
    color: "#F09595"
  },
  {
    id: "Bitter",
    parent: "Angry",
    name: "Bitter",
    color: "#F5C2C0"
  },
  {
    id: "Indignant",
    parent: "Bitter",
    name: "Indignant",
    value: 1,
    color: "#F09595"
  },
  {
    id: "Violated",
    parent: "Bitter",
    name: "Violated",
    value: 1,
    color: "#F09595"
  },
  {
    id: "Mad",
    parent: "Angry",
    name: "Mad",
    color: "#F5C2C0"
  },
  {
    id: "Furious",
    parent: "Mad",
    name: "Furious",
    value: 1,
    color: "#F09595"
  },
  {
    id: "Jealous",
    parent: "Mad",
    name: "Jealous",
    value: 1,
    color: "#F09595"
  },
  {
    id: "Aggressive",
    parent: "Angry",
    name: "Aggressive",
    color: "#F5C2C0"
  },
  {
    id: "Provoked",
    parent: "Aggressive",
    name: "Provoked",
    value: 1,
    color: "#F09595"
  },
  {
    id: "Hostile",
    parent: "Aggressive",
    name: "Hostile",
    value: 1,
    color: "#F09595"
  },
  {
    id: "Frustrated",
    parent: "Angry",
    name: "Frustrated",
    color: "#F5C2C0"
  },
  {
    id: "Infuriated",
    parent: "Frustrated",
    name: "Infuriated",
    value: 1,
    color: "#F09595"
  },
  {
    id: "Annoyed",
    parent: "Frustrated",
    name: "Annoyed",
    value: 1,
    color: "#F09595"
  },
  {
    id: "Distant",
    parent: "Angry",
    name: "Distant",
    color: "#F5C2C0"
  },
  {
    id: "Withdrawn",
    parent: "Distant",
    name: "Withdrawn",
    value: 1,
    color: "#F09595"
  },
  {
    id: "Numb",
    parent: "Distant",
    name: "Numb",
    value: 1,
    color: "#F09595"
  },
  {
    id: "Critical",
    parent: "Angry",
    name: "Critical",
    color: "#F5C2C0"
  },
  {
    id: "Skeptical",
    parent: "Critical",
    name: "Skeptical",
    value: 1,
    color: "#F09595"
  },
  {
    id: "Dismissive",
    parent: "Critical",
    name: "Dismissive",
    value: 1,
    color: "#F09595"
  },

  // Disgusted branch - Level 2 & 3
  {
    id: "Disapproving",
    parent: "Disgusted",
    name: "Disapproving",
    color: "#BFBFBF"
  },
  {
    id: "Judgmental",
    parent: "Disapproving",
    name: "Judgmental",
    value: 1,
    color: "#8F8F8F"
  },
  {
    id: "Embarrassed",
    parent: "Disapproving",
    name: "Embarrassed",
    value: 1,
    color: "#8F8F8F"
  },
  {
    id: "Disappointed",
    parent: "Disgusted",
    name: "Disappointed",
    color: "#BFBFBF"
  },
  {
    id: "Appalled",
    parent: "Disappointed",
    name: "Appalled",
    value: 1,
    color: "#8F8F8F"
  },
  {
    id: "Revolted",
    parent: "Disappointed",
    name: "Revolted",
    value: 1,
    color: "#8F8F8F"
  },
  {
    id: "Awful",
    parent: "Disgusted",
    name: "Awful",
    color: "#BFBFBF"
  },
  {
    id: "Nauseated",
    parent: "Awful",
    name: "Nauseated",
    value: 1,
    color: "#8F8F8F"
  },
  {
    id: "Detestable",
    parent: "Awful",
    name: "Detestable",
    value: 1,
    color: "#8F8F8F"
  },
  {
    id: "Repelled",
    parent: "Disgusted",
    name: "Repelled",
    color: "#BFBFBF"
  },
  {
    id: "Horrified",
    parent: "Repelled",
    name: "Horrified",
    value: 1,
    color: "#8F8F8F"
  },
  {
    id: "Hesitant",
    parent: "Repelled",
    name: "Hesitant",
    value: 1,
    color: "#8F8F8F"
  },

  // Sad branch - Level 2 & 3
  {
    id: "Hurt",
    parent: "Sad",
    name: "Hurt",
    color: "#C4DAEE"
  },
  {
    id: "Embarrassed",
    parent: "Hurt",
    name: "Embarrassed",
    value: 1,
    color: "#98BDDE"
  },
  {
    id: "Disappointed*",
    parent: "Hurt",
    name: "Disappointed*",
    value: 1,
    color: "#98BDDE"
  },
  {
    id: "Depressed",
    parent: "Sad",
    name: "Depressed",
    color: "#C4DAEE"
  },
  {
    id: "Inferior",
    parent: "Depressed",
    name: "Inferior",
    value: 1,
    color: "#98BDDE"
  },
  {
    id: "Empty",
    parent: "Depressed",
    name: "Empty",
    value: 1,
    color: "#98BDDE"
  },
  {
    id: "Guilty",
    parent: "Sad",
    name: "Guilty",
    color: "#C4DAEE"
  },
  {
    id: "Remorseful",
    parent: "Guilty",
    name: "Remorseful",
    value: 1,
    color: "#98BDDE"
  },
  {
    id: "Ashamed",
    parent: "Guilty",
    name: "Ashamed",
    value: 1,
    color: "#98BDDE"
  },
  {
    id: "Despair",
    parent: "Sad",
    name: "Despair",
    color: "#C4DAEE"
  },
  {
    id: "Powerless",
    parent: "Despair",
    name: "Powerless",
    value: 1,
    color: "#98BDDE"
  },
  {
    id: "Grief",
    parent: "Despair",
    name: "Grief",
    value: 1,
    color: "#98BDDE"
  },
  {
    id: "Vulnerable",
    parent: "Sad",
    name: "Vulnerable",
    color: "#C4DAEE"
  },
  {
    id: "Fragile",
    parent: "Vulnerable",
    name: "Fragile",
    value: 1,
    color: "#98BDDE"
  },
  {
    id: "Victimized",
    parent: "Vulnerable",
    name: "Victimized",
    value: 1,
    color: "#98BDDE"
  },
  {
    id: "Lonely",
    parent: "Sad",
    name: "Lonely",
    color: "#C4DAEE"
  },
  {
    id: "Abandoned",
    parent: "Lonely",
    name: "Abandoned",
    value: 1,
    color: "#98BDDE"
  },
  {
    id: "Isolated",
    parent: "Lonely",
    name: "Isolated",
    value: 1,
    color: "#98BDDE"
  },

  // Happy branch - Level 2 & 3
  {
    id: "Optimistic",
    parent: "Happy",
    name: "Optimistic",
    color: "#FDFEC8"
  },
  {
    id: "Inspired",
    parent: "Optimistic",
    name: "Inspired",
    value: 1,
    color: "#FFFE9E"
  },
  {
    id: "Hopeful",
    parent: "Optimistic",
    name: "Hopeful",
    value: 1,
    color: "#FFFE9E"
  },
  {
    id: "Trusting",
    parent: "Happy",
    name: "Trusting",
    color: "#FDFEC8"
  },
  {
    id: "Intimate",
    parent: "Trusting",
    name: "Intimate",
    value: 1,
    color: "#FFFE9E"
  },
  {
    id: "Sensitive",
    parent: "Trusting",
    name: "Sensitive",
    value: 1,
    color: "#FFFE9E"
  },
  {
    id: "Peaceful",
    parent: "Happy",
    name: "Peaceful",
    color: "#FDFEC8"
  },
  {
    id: "Thankful",
    parent: "Peaceful",
    name: "Thankful",
    value: 1,
    color: "#FFFE9E"
  },
  {
    id: "Loving",
    parent: "Peaceful",
    name: "Loving",
    value: 1,
    color: "#FFFE9E"
  },
  {
    id: "Powerful",
    parent: "Happy",
    name: "Powerful",
    color: "#FDFEC8"
  },
  {
    id: "Creative",
    parent: "Powerful",
    name: "Creative",
    value: 1,
    color: "#FFFE9E"
  },
  {
    id: "Courageous",
    parent: "Powerful",
    name: "Courageous",
    value: 1,
    color: "#FFFE9E"
  },
  {
    id: "Accepted",
    parent: "Happy",
    name: "Accepted",
    color: "#FDFEC8"
  },
  {
    id: "Valued",
    parent: "Accepted",
    name: "Valued",
    value: 1,
    color: "#FFFE9E"
  },
  {
    id: "Respected",
    parent: "Accepted",
    name: "Respected",
    value: 1,
    color: "#FFFE9E"
  },
  {
    id: "Proud",
    parent: "Happy",
    name: "Proud",
    color: "#FDFEC8"
  },
  {
    id: "Confident",
    parent: "Proud",
    name: "Confident",
    value: 1,
    color: "#FFFE9E"
  },
  {
    id: "Successful",
    parent: "Proud",
    name: "Successful",
    value: 1,
    color: "#FFFE9E"
  },
  {
    id: "Interested",
    parent: "Happy",
    name: "Interested",
    color: "#FDFEC8"
  },
  {
    id: "Inquisitive",
    parent: "Interested",
    name: "Inquisitive",
    value: 1,
    color: "#FFFE9E"
  },
  {
    id: "Curious",
    parent: "Interested",
    name: "Curious",
    value: 1,
    color: "#FFFE9E"
  },
  {
    id: "Content",
    parent: "Happy",
    name: "Content",
    color: "#FDFEC8"
  },
  {
    id: "Joyful",
    parent: "Content",
    name: "Joyful",
    value: 1,
    color: "#FFFE9E"
  },
  {
    id: "Free",
    parent: "Content",
    name: "Free",
    value: 1,
    color: "#FFFE9E"
  },
  {
    id: "Playful",
    parent: "Happy",
    name: "Playful",
    color: "#FDFEC8"
  },
  {
    id: "Cheeky",
    parent: "Playful",
    name: "Cheeky",
    value: 1,
    color: "#FFFE9E"
  },
  {
    id: "Aroused",
    parent: "Playful",
    name: "Aroused",
    value: 1,
    color: "#FFFE9E"
  },

  // Surprised branch - Level 2 & 3
  {
    id: "Excited",
    parent: "Surprised",
    name: "Excited",
    color: "#D8CCD5"
  },
  {
    id: "Energetic",
    parent: "Excited",
    name: "Energetic",
    value: 1,
    color: "#B8A3CE"
  },
  {
    id: "Eager",
    parent: "Excited",
    name: "Eager",
    value: 1,
    color: "#B8A3CE"
  },
  {
    id: "Amazed",
    parent: "Surprised",
    name: "Amazed",
    color: "#D8CCD5"
  },
  {
    id: "Awe",
    parent: "Amazed",
    name: "Awe",
    value: 1,
    color: "#B8A3CE"
  },
  {
    id: "Astonished",
    parent: "Amazed",
    name: "Astonished",
    value: 1,
    color: "#B8A3CE"
  },
  {
    id: "Confused",
    parent: "Surprised",
    name: "Confused",
    color: "#D8CCD5"
  },
  {
    id: "Perplexed",
    parent: "Confused",
    name: "Perplexed",
    value: 1,
    color: "#B8A3CE"
  },
  {
    id: "Disillusioned",
    parent: "Confused",
    name: "Disillusioned",
    value: 1,
    color: "#B8A3CE"
  },
  {
    id: "Startled",
    parent: "Surprised",
    name: "Startled",
    color: "#D8CCD5"
  },
  {
    id: "Dismayed",
    parent: "Startled",
    name: "Dismayed",
    value: 1,
    color: "#B8A3CE"
  },
  {
    id: "Shocked",
    parent: "Startled",
    name: "Shocked",
    value: 1,
    color: "#B8A3CE"
  },

  // Bad branch - Level 2 & 3
  {
    id: "Tired",
    parent: "Bad",
    name: "Tired",
    color: "#C8EAD5"
  },
  {
    id: "Unfocused",
    parent: "Tired",
    name: "Unfocused",
    value: 1,
    color: "#9FD7B1"
  },
  {
    id: "Sleepy",
    parent: "Tired",
    name: "Sleepy",
    value: 1,
    color: "#9FD7B1"
  },
  {
    id: "Stressed",
    parent: "Bad",
    name: "Stressed",
    color: "#C8EAD5"
  },
  {
    id: "Out of control",
    parent: "Stressed",
    name: "Out of control",
    value: 1,
    color: "#9FD7B1"
  },
  {
    id: "Overwhelmed",
    parent: "Stressed",
    name: "Overwhelmed",
    value: 1,
    color: "#9FD7B1"
  },
  {
    id: "Busy",
    parent: "Bad",
    name: "Busy",
    color: "#C8EAD5"
  },
  {
    id: "Rushed",
    parent: "Busy",
    name: "Rushed",
    value: 1,
    color: "#9FD7B1"
  },
  {
    id: "Pressured",
    parent: "Busy",
    name: "Pressured",
    value: 1,
    color: "#9FD7B1"
  },
  {
    id: "Bored",
    parent: "Bad",
    name: "Bored",
    color: "#C8EAD5"
  },
  {
    id: "Apathetic",
    parent: "Bored",
    name: "Apathetic",
    value: 1,
    color: "#9FD7B1"
  },
  {
    id: "Indifferent",
    parent: "Bored",
    name: "Indifferent",
    value: 1,
    color: "#9FD7B1"
  }
];

// Splice in transparent for the center circle
Highcharts.getOptions().colors.splice(0, 0, "transparent");
Highcharts.setOptions({
  colors: [
    "#E59866",
    "#F8C471",
    "#F7DC6F",
    "#82E0AA",
    "#73C6B6",
    "#85C1E9",
    "#BB8FCE",
    "#F1948A",
    "#B2BABB"
  ]
});

let selectedPath = ''; // Variable to store the current path

// // Get API key and Database ID from URL parameters
// function getConfigFromUrl() {
//     const urlParams = new URLSearchParams(window.location.search);
//     return {
//         NOTION_API_KEY: urlParams.get('key'),
//         NOTION_DATABASE_ID: urlParams.get('db')
//     };
// }

// Use the config from URL
// const config = getConfigFromUrl();

// Add rotation tracking variables
let currentRotation = 0;
let chart;

// Create the chart
chart = Highcharts.chart("container", {
  chart: {
    height: "100%",
    events: {
      load: function() {
        // Add scroll event listener after chart loads
        window.addEventListener('wheel', handleWheel);
      },
      destroy: function() {
        // Clean up event listener when chart is destroyed
        window.removeEventListener('wheel', handleWheel);
      }
    }
  },
  chart: {
    height: "100%",
    backgroundColor: "#191919", // Set background color to dark gray
    events: {
      load: function() {
        // Add scroll event listener after chart loads
        window.addEventListener('wheel', handleWheel);
      },
      destroy: function() {
        // Clean up event listener when chart is destroyed
        window.removeEventListener('wheel', handleWheel);
      }
    }
  },

  title: {
    text: "The Feelings Wheel"
  },
  // subtitle: {
  //   text:
  //     'Source <href="https://blog.calm.com/blog/the-feelings-wheel">Calm</a>'
  // },
  //   accessibility: {
  //   typeDescription:
  //     "Sunburst chart with three levels to display the feelings wheel of happiness. The first level shows the word happy. The next level displays close feelings to the word happy such as content and optimistic, where the third level displays more general happiness feelings, such as free, joyful, successful."
  // },
  series: [
    {
      type: "sunburst",
      data: data,
      allowDrillToNode: true,
      cursor: "pointer",
      animation: {
        duration: 100 // Adjust animation speed here
      },
      point: {
        events: {
          click: function() {
            let path = [];
            let currentPoint = this;
            
            // Keep traversing up until we reach the root
            while (currentPoint) {
              if (currentPoint.name && currentPoint.name !== "Feelings") { // Skip "Feelings"
                path.unshift(currentPoint.name);
              }
              currentPoint = currentPoint.parent ? 
                this.series.points.find(p => p.id === currentPoint.parent) : 
                null;
            }
            
            // Create the path string
            const selectedPath = path.join('/');
            

            const el = document.createElement('textarea');
            el.value = 
                (selectedPath.startsWith("Fearful") ? "🟠" : // Orange circle for Fearful
                selectedPath.startsWith("Bad") ? "🟢" : // Green circle for Bad
                selectedPath.startsWith("Surprised") ? "🟣" : // Purple circle for Surprised
                selectedPath.startsWith("Happy") ? "🟡" : // Yellow circle for Happy
                selectedPath.startsWith("Sad") ? "🔵" : // Blue circle for Sad
                selectedPath.startsWith("Disgusted") ? "⚫" : // Gray circle for Disgusted
                selectedPath.startsWith("Angry") ? "🔴" : // Red circle for Angry
                "jimmy") + selectedPath; // Default value
            document.body.appendChild(el);
            el.select();
            
            try {
              document.execCommand('copy');
            } finally {
              document.body.removeChild(el);
            }
          }
        }
      },
      dataLabels: {
        format: "{point.name}",
        filter: {
          property: "innerArcLength",
          operator: ">",
          value: 8
        },
        style: {
          textOutline: false,
          color: "black"
        },
        rotationMode: "circular"
      },
      levels: [
        {
          level: 1,
          levelIsConstant: false,
          dataLabels: {
            filter: {
              property: "outerArcLength",
              operator: ">",
              value: 64
            }
          }
        },
        {
          level: 2,
          colorByPoint: true
        },
        {
          level: 3,
          colorVariation: {
            key: "brightness",
            to: -0.5
          }
        },
        {
          level: 4,
          colorVariation: {
            key: "brightness",
            to: 0.5
          }
        }
      ]
    }
  ],
  tooltip: {
    headerFormat: "",
    pointFormat: "Feeling: <b>{point.options.name}</b>"
  }
});

// Wheel event handler
function handleWheel(event) {
  event.preventDefault();
  
  // Determine rotation direction and speed
  const delta = event.deltaY;
  const rotationDelta = delta > 0 ? 5 : -5; // Adjust rotation speed here
  
  // Update rotation
  currentRotation += rotationDelta;
  
  // Apply rotation to the chart
  chart.series[0].update({
    startAngle: currentRotation
  });
}

// Prevent default scrolling on the page when over the chart
document.getElementById('container').addEventListener('wheel', function(e) {
  e.preventDefault();
}, { passive: false });

// async function getExistingSelections() {
//   try {
//     const response = await fetch(`https://api.notion.com/v1/databases/${config.NOTION_DATABASE_ID}/query`, {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${config.NOTION_API_KEY}`,
//         'Notion-Version': '2022-06-28',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         page_size: 1,
//         sorts: [
//           {
//             property: "Date",
//             direction: "descending"
//           }
//         ]
//       })
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch from Notion database');
//     }

//     const data = await response.json();
    
//     // Get the most recent entry's selections
//     if (data.results && data.results.length > 0) {
//       const mostRecent = data.results[0];
//       // Adjust 'Emotions' to match your multi-select property name
//       return mostRecent.properties.Emotions.multi_select.map(option => option.name);
//     }

//     return [];
//   } catch (error) {
//     console.error('Error fetching from Notion:', error);
//     return [];
//   }
// }

// async function updateNotionDatabase(selections) {
//   try {
//     // First, ensure all options exist in the multi-select property
//     await ensureOptionsExist(selections);

//     // Then create the page with selections
//     const response = await fetch(`https://api.notion.com/v1/pages`, {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${config.NOTION_API_KEY}`,
//         'Notion-Version': '2022-06-28',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         parent: { database_id: config.NOTION_DATABASE_ID },
//         properties: {
//           "Emotions": {
//             type: "multi_select",
//             multi_select: selections.map(path => ({
//               name: path
//             }))
//           },
//           "Date": {
//             type: "date",
//             date: {
//               start: new Date().toISOString()
//             }
//           }
//         }
//       })
//     });

//     if (!response.ok) {
//       throw new Error('Failed to update Notion database');
//     }

//     console.log('Successfully updated database with selections:', selections);
//   } catch (error) {
//     console.error('Error updating Notion:', error);
//   }
// }

// async function ensureOptionsExist(selections) {
//   try {
//     // Get database schema
//     const response = await fetch(`https://api.notion.com/v1/databases/${config.NOTION_DATABASE_ID}`, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${config.NOTION_API_KEY}`,
//         'Notion-Version': '2022-06-28'
//       }
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch database schema');
//     }

//     const database = await response.json();
    
//     // Get existing options
//     const existingOptions = database.properties.Emotions.multi_select.options.map(opt => opt.name);
    
//     // Find which selections don't exist yet
//     const newOptions = selections.filter(sel => !existingOptions.includes(sel));
    
//     // If there are new options, update the database schema
//     if (newOptions.length > 0) {
//       const updateResponse = await fetch(`https://api.notion.com/v1/databases/${config.NOTION_DATABASE_ID}`, {
//         method: 'PATCH',
//         headers: {
//           'Authorization': `Bearer ${config.NOTION_API_KEY}`,
//           'Notion-Version': '2022-06-28',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           properties: {
//             "Emotions": {
//               multi_select: {
//                 options: [...existingOptions, ...newOptions].map(name => ({
//                   name: name
//                 }))
//               }
//             }
//           }
//         })
//       });

//       if (!updateResponse.ok) {
//         throw new Error('Failed to update database schema');
//       }
//     }
//   } catch (error) {
//     console.error('Error ensuring options exist:', error);
//   }
// }