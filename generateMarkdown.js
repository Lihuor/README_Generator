const generateMarkdown = (response) => {
    return `

# ${response.title}\n

# Table of contents:\n
${response.contents}

# Descriptions:\n
${response.description}\n

## Installation:\n
${response.installation}\n

## Usage:\n
${response.usage}\n

## License:\n
![${response.license}](https://img.shields.io/apm/l/atomic-design-ui.svg?)\n

## Contributor:\n
${response.contributing}\n

## Test:\n
${response.tests}\n

## Questions:\n
${response.questions}\n

    `;
};

module.exports = generateMarkdown;