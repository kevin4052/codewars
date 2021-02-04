# https://www.codewars.com/kata/514b92a657cdc65150000006/ruby

# --------------my solution--------------
def solution(number)
    sum = 0;
    
    for i in 0..(number-1)
      if i % 5 == 0 || i % 3 == 0 then
        sum += i;
      end  
    end
      
    return sum;
end

# --------------best practice--------------
def solution(number)
    (1...number).select {|i| i%3==0 || i%5==0}.inject(:+)
end