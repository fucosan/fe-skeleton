import fs from 'fs';
import path from 'path';

const componentName = process.argv[2];
if (!componentName) {
  console.error('Please provide a component name.');
  process.exit(1);
}

const pathName = process.argv[3];
if (!pathName) {
  console.error('Please provide a path name.');
  process.exit(1);
}

// Convert kebab-case to PascalCase
const toPascalCase = (str) => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

const componentNamePascal = toPascalCase(componentName);

// Ensure the correct path inside `src/components`
const componentDir = path.join(process.cwd(), pathName, componentName);
const componentFile = path.join(componentDir, `${componentName}.tsx`);
const storyFile = path.join(componentDir, `${componentName}.stories.tsx`);

if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

const componentContent = `
import React from 'react';

type ${componentNamePascal}Props = {};

export const ${componentNamePascal}: React.FC<${componentNamePascal}Props> = () => {
  return <h1>${componentNamePascal}</h1>;
};
`;

const storyContent = `
import { Meta, StoryObj } from '@storybook/react';
import { ${componentNamePascal} } from './${componentName}';

const meta = {
  title: 'Components/${componentNamePascal}',
  component: ${componentNamePascal},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ${componentNamePascal}>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
`;

fs.writeFileSync(componentFile, componentContent.trim());
fs.writeFileSync(storyFile, storyContent.trim());

console.log(`Component ${componentNamePascal} created successfully at ${componentDir}`);
