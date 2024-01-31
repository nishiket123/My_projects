// pages/index.js

import { useState, useEffect } from 'react';

const HomePage = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const savedSections = localStorage.getItem('websiteSections');
    if (savedSections) {
      setSections(JSON.parse(savedSections));
    }
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    const itemType = e.dataTransfer.getData('itemType');
    const newItem = { type: itemType, content: '', style: {} };
    setSections([...sections, newItem]);
  };

  const handleDelete = (index) => {
    const updatedSections = [...sections];
    updatedSections.splice(index, 1);
    setSections(updatedSections);
  };

  const handleSave = () => {
    localStorage.setItem('websiteSections', JSON.stringify(sections));
  };

  return (
    <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
      <Toolbar />
      <div className="canvas">
        {sections.map((section, index) => (
          <Section
            key={index}
            section={section}
            index={index}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

const Toolbar = () => {
  const handleDragStart = (e, itemType) => {
    e.dataTransfer.setData('itemType', itemType);
  };

  return (
    <div className="toolbar">
      <button draggable onDragStart={(e) => handleDragStart(e, 'text')}>
        Add Text
      </button>
      <button draggable onDragStart={(e) => handleDragStart(e, 'image')}>
        Add Image
      </button>
    </div>
  );
};

const Section = ({ section, index, onDelete }) => {
  const handleChange = (e) => {
    const updatedSections = [...sections];
    updatedSections[index].content = e.target.value;
    setSections(updatedSections);
  };

  const handleStyleChange = (style) => {
    const updatedSections = [...sections];
    updatedSections[index].style = { ...section.style, ...style };
    setSections(updatedSections);
  };

  return (
    <div className="section" style={section.style}>
      {section.type === 'text' ? (
        <textarea value={section.content} onChange={handleChange} />
      ) : section.type === 'image' ? (
        <input
          type="url"
          value={section.content}
          onChange={handleChange}
          placeholder="Enter Image URL"
        />
      ) : null}
      <button onClick={onDelete}>Delete</button>
      <div>
        <label>Background Color:</label>
        <input
          type="color"
          value={section.style.backgroundColor || ''}
          onChange={(e) => handleStyleChange({ backgroundColor: e.target.value })}
        />
      </div>
      <div>
        <label>Text Color:</label>
        <input
          type="color"
          value={section.style.color || ''}
          onChange={(e) => handleStyleChange({ color: e.target.value })}
        />
      </div>
      <div>
        <label>Font Size:</label>
        <input
          type="number"
          value={section.style.fontSize || ''}
          onChange={(e) => handleStyleChange({ fontSize: `${e.target.value}px` })}
        />
      </div>
    </div>
  );
};

export default HomePage;

