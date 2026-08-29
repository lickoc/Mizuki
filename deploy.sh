#!/bin/zsh                                                                               
                                                                                                                                               
pnpm build                                                                                                                                             
echo "Building..."                                                                                                                                     
echo "Deploying..."                                                                                                                                    
ssh ubuntu@81.71.3.105 "rm -rf /home/ubuntu/blog-dist"                                                                                                 
scp -r dist ubuntu@81.71.3.105:/home/ubuntu/blog-dist                                                                                                  
ssh ubuntu@81.71.3.105 "sudo systemctl reload nginx"                                                                                                   
echo "✅ http://lickoc.site/"