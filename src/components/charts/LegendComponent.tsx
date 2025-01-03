interface LegendItem {
  label: string;
  color: string;
}

const LegendComponent = ({ label, color }: LegendItem) => {
  return (
    <span 
    className='text-wingman-lightgray text-sm'
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
      }}
    >
      <span 
        style={{ 
          width: '20px', 
          height: '4px', 
          borderRadius: '5px', 
          marginRight: '5px', 
          display: 'inline-block', 
          backgroundColor: color 
        }} 
      />
      {label}
    </span>
  );
};

export default LegendComponent;