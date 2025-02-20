import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TimelineItemProps {
  icon: LucideIcon;
  title: string;
  organization: string;
  period: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  icon: Icon,
  title,
  organization,
  period,
  description,
  isLast = false
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
          <Icon className="w-6 h-6 text-purple-600" />
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-gradient-to-b from-purple-600 to-pink-500 mt-4" />
        )}
      </div>
      <div className="pb-8">
        <h4 className="font-semibold text-xl text-gray-800">{title}</h4>
        <p className="text-purple-600 font-medium">{organization}</p>
        <p className="text-gray-500 text-sm mb-2">{period}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;