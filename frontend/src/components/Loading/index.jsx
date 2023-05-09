import LoadingScreen from 'react-loading-screen';

const Loading = () => {
  return (
    <LoadingScreen
      loading={true}
      bgColor='#ffffff'
      spinnerColor='#9ee5f8'
      textColor='#676767'
    />
  );
};

export default Loading;
