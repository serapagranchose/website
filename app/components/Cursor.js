'use client'

import React, { useState, useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const handleMouseMove = ({clientX, clientY}) => {

    }
  }, []);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="bg-black"></div>
  );
}