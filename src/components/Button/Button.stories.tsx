import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'ghost', 'destructive'],
        },
        size: {
            control: 'radio',
            options: ['sm', 'md', 'lg'],
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Action',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Action',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Ghost Button',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'Delete Item',
    },
};
