
// Fix: Added missing React import to resolve the 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}
