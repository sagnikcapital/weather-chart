import  { useState, useEffect } from 'react';
import loadTawkTo from './botService';

const Bot = ({ propertyId }) => {
  return (
    loadTawkTo(propertyId)
  );
}

export default Bot;