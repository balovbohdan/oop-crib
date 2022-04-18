import Chair from './Chair';
import Sofa from './Sofa';

interface FurnitureFactory {
  createChair(complexity: number, cost: number): Chair;
  createSofa(complexity: number, cost: number): Sofa;
}

export default FurnitureFactory;
