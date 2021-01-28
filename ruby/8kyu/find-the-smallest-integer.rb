# https://www.codewars.com/kata/55a2d7ebe362935a210000b2/ruby

# ---------my solution---------
def find_smallest_int(arr)
    min = arr[0];
    
    arr.each do |i|
      if min > i then
        min = i;
      end
    end
      
    return min;        
end

# ---------best practice---------
def find_smallest_int(arr) arr.min end