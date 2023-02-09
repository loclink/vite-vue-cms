import { ref } from 'vue';

const useDemo = () => {
  const demoData = ref('11111111');
  console.log('demo');
  return demoData;
};
export { useDemo };
