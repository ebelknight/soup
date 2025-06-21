// Load content from text file
async function loadContent() {
    try {
        const response = await fetch('content.txt');
        const text = await response.text();
        
        // Split the text into lines
        const lines = text.split('\n').filter(line => line.trim() !== '');
        
        // Get the heading (first line)
        const heading = lines[0];
        
        // Get the content (remaining lines)
        const content = lines.slice(1);
        
        // Update the heading
        const postTitle = document.querySelector('.post-title');
        if (postTitle) {
            postTitle.textContent = heading;
        }
        
        // Update the content
        const postContent = document.querySelector('.post-content');
        if (postContent) {
            // Clear existing content
            postContent.innerHTML = '';
            
            // Add each paragraph
            content.forEach(paragraph => {
                if (paragraph.trim()) {
                    const p = document.createElement('p');
                    p.className = 'post-content';
                    p.textContent = paragraph;
                    postContent.appendChild(p);
                }
            });
        }
        
    } catch (error) {
        console.error('Error loading content:', error);
        // Fallback to default content if file can't be loaded
        document.querySelector('.post-title').textContent = 'Error Loading Content';
        document.querySelector('.post-content').innerHTML = '<p>Could not load content from content.txt file.</p>';
    }
}

// Load content when page loads
document.addEventListener('DOMContentLoaded', loadContent); 