import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const componentDir = path.join(process.cwd(), pathName, componentName);
console.log(componentDir);
const componentFile = path.join(componentDir, `${componentName}.tsx`);
const storyFile = path.join(componentDir, `${componentName}.stories.tsx`);

if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

const componentContent = `
import React from 'react';

type ${componentName}Props = {};

export const ${componentName}: React.FC<${componentName}Props> = () => {
  return <h1>${componentName}</h1>;
};
`;

const storyContent = `
import { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';

const meta = {
  title: 'Components/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ${componentName}>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
`;

fs.writeFileSync(componentFile, componentContent.trim());
fs.writeFileSync(storyFile, storyContent.trim());

console.log(`Component ${componentName} created successfully.`);
