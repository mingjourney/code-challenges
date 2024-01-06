import * as algorithms from '../algorithms/algorithms'
import CardComponent from '../components/CardComponent'
// import * as handShredded from '@/components/handShredded/handShredded'
const CodingBoard = () => {
  const input1 = [1, 2, 3, 4, 6, 2, 5, 1]
  const target1 = 5
  const string15 = ['dew', 'wed', 'ewf']
  const input128 = [100, 4, 200, 1, 3, 2]
  const input283 = [1, 2, 5, 2, 0, 2, 9, 0, 9, 5]
  const input11 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
  const input15 = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]
  const input42 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
  const input3 = 'abcabcbb'
  const input438_s = 'cbaebabacd'
  const input438_p = 'abc'
  const input560_nums = [1, 2, 3]
  const input560_k = 3
  const input239_nums = [1, 3, -1, -3, 5, 3, 6, 7]
  const input239_k = 3
  const input76_s = 'ADOBECODEBANC'
  const input76_t = 'ABC'
  const input53 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  const input56 = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ]
  const input189_nums = [1, 2, 3, 4, 5, 6, 7]
  const input189_k = 3
  const input238 = [1, 2, 3, 4]
  return (
    <div style={{ padding: '10px' }}>
      <h4>11.6-11.13</h4>
      <CardComponent
        title="1-twoSum"
        data={algorithms.twoSum(input1, target1)}
      />
      <CardComponent
        title="15-groupAnagrams"
        data={algorithms.groupAnagrams(string15)}
      />
      <CardComponent
        title="128-longesteConsecutive"
        data={algorithms.longestConsecutive1(input128)}
      />
      <CardComponent
        title="283-moveZeroes"
        data={algorithms.moveZeroes(input283)}
      />
      <CardComponent title="11-maxArea" data={algorithms.maxArea(input11)} />
      <h4>12.20-12.22</h4>
      <CardComponent
        title="128-longestConsecutive-2"
        data={algorithms.longestConsecutive2(input128)}
      />
      <CardComponent
        title="1-twoSum-2"
        data={algorithms.twoSum2(input1, target1)}
      />
      <CardComponent
        title="15-groupAnagrams-2"
        data={algorithms.groupAnagrams2(string15)}
      />
      <CardComponent
        title="283-moveZeroes-2"
        data={algorithms.moveZeroes2(input283)}
      />
      <CardComponent
        title="283-moveZeroes-3"
        data={algorithms.moveZeroes3(input283)}
      />
      <CardComponent title="11-maxArea-2" data={algorithms.maxArea2(input11)} />
      <CardComponent title="15-threeSum" data={algorithms.threeSum(input15)} />
      <CardComponent title="42-trap" data={algorithms.trap(input42)} />
      <CardComponent
        title="3-lengthOfLongestSubstring"
        data={algorithms.lengthOfLongestSubstring(input3)}
      />
      <CardComponent
        title="438-findAnagrams"
        data={algorithms.findAnagrams(input438_s, input438_p)}
      />
      <CardComponent
        title="560-subarraySum"
        data={algorithms.subarraySum(input560_nums, input560_k)}
      />
      <h4>1.1-1.7</h4>
      <CardComponent
        title="239-maxSlidingWindow(1.3 -> 1.7)"
        data={algorithms.maxSlidingWindow(input239_nums, input239_k)}
      />
      <CardComponent
        title="560-subarraySum-2(1.3 -> 1.7)"
        data={algorithms.subarraySum2(input560_nums, input560_k)}
      />
      <CardComponent
        title="76-minWindow(待解决)"
        data={algorithms.minWindow(input76_s, input76_t)}
      />
      <CardComponent
        title="53-minWindow(1.3 -> 1.7)"
        data={algorithms.maxSubArray(input53)}
      />
      <CardComponent title="56-merge" data={algorithms.merge(input56)} />
      <CardComponent
        title="189-rotate"
        data={algorithms.rotate(input189_nums, input189_k)}
      />
      <CardComponent
        title="189-rotate-优化"
        data={algorithms.rotate1(input189_nums, input189_k)}
      />
      <CardComponent
        title="238-productExceptSelf"
        data={algorithms.productExceptSelf(input238)}
      />
    </div>
  )
}
export default CodingBoard
