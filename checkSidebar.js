// checkSidebar.js
const fs = require('fs');
const path = require('path');

// 1️⃣ Import your sidebars
const sidebars = require('./sidebars.ts').default || require('./sidebars.ts');

// 2️⃣ Docs folder path
const docsDir = path.join(__dirname, 'docs');

function checkItem(item) {
  if (item.type === 'category') {
    item.items.forEach(checkItem);
  } else if (item.type === 'doc' || typeof item === 'string') {
    const docId = item.type === 'doc' ? item.id : item;
    const docPath = path.join(docsDir, docId + '.md');
    if (!fs.existsSync(docPath)) {
      console.error(`❌ Missing doc file: ${docPath}`);
    } else {
      console.log(`✅ Found: ${docPath}`);
    }
  }
}

// 3️⃣ Iterate over all sidebars
Object.entries(sidebars).forEach(([sidebarId, items]) => {
  console.log(`\n🔹 Checking sidebar: ${sidebarId}`);
  items.forEach(checkItem);
});