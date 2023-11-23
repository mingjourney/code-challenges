import * as algorithms from '../algorithms/algorithms'
import CardComponent from '../components/CardComponent'
import { UpCircleOutlined } from '@ant-design/icons'
export const CodingBoard = () => {
  const input1 = [1, 2, 3, 4, 6, 2, 5, 1]
  const target1 = 5
  const string15 = ['dew', 'wed', 'ewf']
  const input128 = [100, 4, 200, 1, 3, 2]
  const input283 = [1, 2, 5, 2, 0, 2, 9, 0, 9, 5]
  const input11 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
  // const input15 = [-1, 0, 1, 2, -1, -4]
  return (
    <div style={{ padding: '10px' }}>
      <h4>11.6-11.13</h4>
      <UpCircleOutlined style={{ fontSize: '20px' }} />
      <CardComponent
        title="1-twoSum"
        data={algorithms.twoSum(input1, target1)}
      />
      <CardComponent
        title="15-groupAnagrams"
        data={algorithms.groupAnagrams(string15)}
      />
      <CardComponent
        title="128-longestConsecutive"
        data={algorithms.longestConsecutive(input128)}
      />
      <CardComponent
        title="283-moveZeroes"
        data={algorithms.moveZeroes(input283)}
      />
      <CardComponent title="11-maxArea" data={algorithms.maxArea(input11)} />
      {/* <CardComponent title="15-threeSum" data={algorithms.threeSum(input15)} /> */}
    </div>
  )
}
