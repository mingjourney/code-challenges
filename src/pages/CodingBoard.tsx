import * as algorithms from '../algorithms/algorithms'
import CardComponent from '../components/CardComponent'
import './CodingBoard.css'
// import TrangleLeftTop from '@/components/TrangleLeftTop'
// import * as handShredded from '@/components/handShredded/handShredded'
const CodingBoard = () => {
  const input1 = [1, 2, 3, 4, 6, 2, 5, 1]
  const target1 = 5
  const input49 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
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
  const input56_2 = [
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
      <div className="week-container">
        <CardComponent
          title="1-twoSum"
          data={algorithms.twoSum(input1, target1)}
        />
        <CardComponent
          title="49-groupAnagrams"
          data={algorithms.groupAnagrams(input49)}
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
      </div>
      <h4>12.20-12.22</h4>
      <div className="week-container">
        <CardComponent
          title="128-longestConsecutive-2"
          data={algorithms.longestConsecutive2(input128)}
        />
        <CardComponent
          title="1-twoSum-2"
          data={algorithms.twoSum2(input1, target1)}
        />
        <CardComponent
          title="49-groupAnagrams-2"
          data={algorithms.groupAnagrams2(input49)}
        />
        <CardComponent
          title="283-moveZeroes-2"
          data={algorithms.moveZeroes2(input283)}
        />
        <CardComponent
          title="283-moveZeroes-3"
          data={algorithms.moveZeroes3(input283)}
        />
        <CardComponent
          title="11-maxArea-2"
          data={algorithms.maxArea2(input11)}
        />
        <CardComponent
          title="15-threeSum"
          data={algorithms.threeSum(input15)}
        />
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
      </div>

      <h4>1.1-1.7</h4>
      <div className="week-container">
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
          title="53-maxSubArray(1.3 -> 1.7)"
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
        <CardComponent
          title="160-getIntersectionNode"
          data={algorithms.getIntersectionNode(null, null)}
        />
      </div>
      <h4>1.13-1.16</h4>
      <div className="week-container">
        <CardComponent
          title="239-maxSlidingWindow2"
          data={algorithms.maxSlidingWindow2(input239_nums, input239_k)}
        />
        <CardComponent
          title="1-twoSum-3"
          data={algorithms.twoSum3(input1, target1)}
        />
        <CardComponent
          title="49-groupAnagrams-3"
          data={algorithms.groupAnagrams3(input49)}
        />
        <CardComponent
          title="128-longestConsecutive-3"
          data={algorithms.longestConsecutive3(input128)}
        />
        <CardComponent
          title="283-moveZeroes-3"
          data={algorithms.moveZeroes4(input283)}
        />
        <CardComponent
          title="11-maxArea-3"
          data={algorithms.maxArea3(input11)}
        />
        <CardComponent
          title="15-threeSum-2"
          data={algorithms.threeSum2(input15)}
        />
        <CardComponent title="42-trap-2" data={algorithms.trap2(input42)} />
        <CardComponent
          title="3-lengthOfLongestSubstring-2"
          data={algorithms.lengthOfLongestSubstring2(input3)}
        />
        <CardComponent
          title="3-lengthOfLongestSubstring-3"
          data={algorithms.lengthOfLongestSubstring3(input3)}
        />
      </div>
      <h4>1.17-1.20</h4>
      <div className="week-container">
        <CardComponent
          title="438-findAnagrams-2"
          data={algorithms.findAnagrams2(input438_s, input438_p)}
        />
        <CardComponent
          title="560-subarraySum-3"
          data={algorithms.subarraySum3(input560_nums, input560_k)}
        />
        <CardComponent
          title="53-maxSubArray2(1.18 -> 1.22)"
          data={algorithms.maxSubArray2(input53)}
        />
        <CardComponent title="56-merge-2" data={algorithms.merge2(input56_2)} />
        <CardComponent
          title="189-rotate-2.1"
          data={algorithms.rotate2(input189_nums, input189_k)}
        />
        <CardComponent
          title="189-rotate-2.2"
          data={algorithms.rotate3(input189_nums, input189_k)}
        />
        <CardComponent
          title="238-productExceptSelf"
          data={algorithms.productExceptSelf2(input238)}
        />
      </div>
      <h4>1.22-1.30</h4>
      <div className="week-container">
        <CardComponent title="160-productExceptSelf" data="未运行" />
        <CardComponent title="206-reverseList" data="未运行" />
        <CardComponent title="234-isPalindrome" data="未运行" />
        <CardComponent title="141-hasCycle" data="未运行" />
        <CardComponent title="94-inorderTraversal" data="未运行" />
        <CardComponent title="104-maxDepth" data="未运行" />
        <CardComponent title="226-invertTree" data="未运行" />
        <CardComponent title="101-isSymmetric" data="未运行" />
        <CardComponent title="543-diameterOfBinaryTree" data="未运行" />
        <CardComponent title="102-levelOrder" data="未运行" />
        <CardComponent
          title="15-threeSum-3"
          data={algorithms.threeSum3(input15)}
        />
      </div>
      {/* <TrangleLeftTop /> */}
    </div>
  )
}
export default CodingBoard
