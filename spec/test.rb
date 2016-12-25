
# should change:

my_method( bad_spacing  )
  my_hash = {has: bad_spacing, and: "double quotes"}
  puts "These quotes stay: #{my_hash}"
  puts "Won't change strings with ' in them"
end

tight_hash = {a:1}
loose_hash = {  b: ( 2 )  }
my_method(   tight_hash  )
""
"#"
"testn"

# shouldn't change:

"Here's a string with interpolation: #{loose_hash}"
"Here's a string with a single quote in it"
