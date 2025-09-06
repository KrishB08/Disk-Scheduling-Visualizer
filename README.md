# Disk Scheduling Visualizer

A web-based tool for visualizing disk scheduling algorithms with interactive demonstrations and real-time seek sequence analysis.

## 🚀 Features

- **Interactive Web Interface**: Clean, modern UI built with HTML and Tailwind CSS
- **Four Disk Scheduling Algorithms**: 
  - SCAN (Elevator Algorithm)
  - Ant Colony Optimization
  - OTHDSA (Optimized Two-Handed Disk Scheduling Algorithm)
  - Zone-Based Scheduling
- **Real-time Visualization**: Dynamic seek sequence display with visual blocks
- **Comprehensive Analysis**: Shows total seek time and complete seek sequence
- **Direction Control**: Configurable direction for SCAN algorithm

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS (CDN)
- **Algorithms**: Custom implementations of disk scheduling algorithms

## 📋 Algorithms Implemented

### 1. SCAN (Elevator Algorithm)
- Moves the disk head in one direction until the end, then reverses
- Configurable direction (up/down)
- Provides good performance with minimal starvation

### 2. Ant Colony Optimization
- Uses distance-based heuristic to find optimal path
- Sorts requests by distance from current head position
- Mimics ant behavior for path optimization

### 3. OTHDSA (Optimized Two-Handed Disk Scheduling Algorithm)
- Sorts requests based on distance from initial head position
- Provides efficient scheduling with minimal seek time
- Optimized for specific disk access patterns

### 4. Zone-Based Scheduling
- Divides disk into three zones: low (0-49), mid (50-150), high (151+)
- Processes requests zone by zone in ascending order
- Provides structured approach to disk access

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd OS-project
   ```

2. **Open the application**
   - Simply open `scans.html` in your web browser
   - No additional setup or installation required

3. **Use the visualizer**
   - Select your preferred algorithm from the dropdown
   - Enter comma-separated disk requests (e.g., 55, 58, 39, 18, 90, 160, 150, 38, 184)
   - Set the initial head position
   - Click "Simulate" to see the results

## 📊 How to Use

1. **Select Algorithm**: Choose from SCAN, Ant Colony, OTHDSA, or Zone-Based
2. **Set Direction** (SCAN only): Choose up or down direction
3. **Enter Requests**: Input comma-separated disk track numbers
4. **Set Head Position**: Specify the initial disk head position
5. **Simulate**: Click the simulate button to see the seek sequence and total seek time

## 📈 Example Usage

**Input:**
- Algorithm: SCAN
- Direction: Up
- Requests: 55, 58, 39, 18, 90, 160, 150, 38, 184
- Head Position: 50

**Output:**
- Seek Sequence: 50 → 55 → 58 → 90 → 150 → 160 → 184 → 39 → 38 → 18
- Total Seek Time: 236

## 🎯 Project Structure

```
OS project/
├── scans.html          # Main HTML file with UI
├── script.js           # JavaScript implementation of algorithms
└── README.md           # Project documentation
```

## 🔧 Algorithm Details

### SCAN Algorithm
- **Time Complexity**: O(n log n) due to sorting
- **Space Complexity**: O(n)
- **Best Case**: When requests are already sorted
- **Worst Case**: When requests are in reverse order

### Ant Colony Algorithm
- **Time Complexity**: O(n²) in worst case
- **Space Complexity**: O(n)
- **Heuristic**: Distance-based selection
- **Optimization**: Mimics natural ant behavior

### OTHDSA Algorithm
- **Time Complexity**: O(n log n) due to sorting
- **Space Complexity**: O(n)
- **Strategy**: Distance-based optimization from initial position

### Zone-Based Algorithm
- **Time Complexity**: O(n log n) due to sorting within zones
- **Space Complexity**: O(n)
- **Strategy**: Zone-wise processing for structured access

## 🎨 Visual Features

- **Color-coded blocks**: Green blocks represent each disk track in the seek sequence
- **Responsive design**: Works on desktop and mobile devices
- **Real-time updates**: Immediate visualization of results
- **Clean interface**: Modern, intuitive user experience

## 📚 Educational Value

This project demonstrates:
- Implementation of various disk scheduling algorithms
- Web-based visualization techniques
- Algorithm comparison and analysis
- Interactive learning tools for operating systems concepts

## 🤝 Contributing

Feel free to contribute to this project by:
- Adding new disk scheduling algorithms
- Improving the visualization
- Enhancing the user interface
- Adding more educational features

## 📄 License

This project is open source and available under the MIT License.

---

**Built for Operating Systems Course Project**  
*Demonstrating disk scheduling algorithms through interactive web visualization*