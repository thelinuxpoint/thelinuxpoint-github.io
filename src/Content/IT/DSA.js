import React from 'react';
import {NavLink} from "react-router-dom";
import ReactEmbedGist from 'react-embed-gist';
import ReactMarkdown from 'react-markdown'

import Navigator from "../../Components/Navigator";
import Mark from "../../Components/Markdown";
import Table from "../../Components/Table"
import Shell from "../../Components/Shell";
import Head from "../../Components/Header";
import {Helmet} from 'react-helmet';

function slideIN(){
	if(window.innerHeight>window.innerWidth){
		document.getElementsByClassName('flap-dsa')[0].style.left="-300px";
		if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
            	}
	}
}

function Author(){
    return(
        <div  style={{color:"white",fontSize:"17px",display:"flex",justifyContent:"space-between",padding:"10px"}}>
            <div draggable={false} className="" title="Visit Youtube Channel" onClick={function(){
                     var x = document.createElement('a');
                     x.href="https://www.youtube.com/channel/UCVYclxop0utX10SW0kOK9Ig";
                     x.click();}}>
                <img src="https://thelinuxpoint.github.io/youtube.dark.min.svg" alt="youtube" style={{'height':'30px','width':'30px'}}/>
            </div>
            <div draggable={false} className="" title="Visit Github" onClick={function(){
                    var x = document.createElement('a');
                     x.href="https://github.com/thelinuxpoint";
                     x.click();}}>
                <img src="https://thelinuxpoint.github.io/github.dark.min.svg" alt="github" style={{'height':'30px','width':'30px'}}/>
            </div>
        </div>
    );
}

function FlapDsa(props){
	return(
		<>
		<div className="flap-dsa">
			<div className="display">
				<img src="https://thelinuxpoint.github.io/dsa.svg" style={{width:"200px",height:"150px"}}/>
			</div>			
			<hr/>
			<div className="topic">
				<NavLink to="/dsa/intro" className="descr"><p>Intdoduction</p></NavLink>
			</div>
			<hr/>
			<div className="topic-li">
				<p>DSA - I</p>
				<a className="toggle-switch-a" id="toggle-dsa1" onClick={function(){
					if (document.getElementById('toggle-dsa1').style.transform=="rotateZ(90deg)"){
						document.getElementById('toggle-dsa1').style.transform="rotateZ(0deg)";
						document.getElementById('dsa-1').hidden=true;

					}else{
						document.getElementById('toggle-dsa1').style.transform="rotateZ(90deg)";
						document.getElementById('dsa-1').hidden=false;
					}
				}}>❱</a>
			</div>
			<hr/>
			<div hidden="true" id="dsa-1">
				<div className="topic">
					<NavLink to="/dsa/queue" className="descr"><p>Queue</p></NavLink>
				</div>
				<hr />
				<div className="topic">
					<NavLink to="/dsa/stack" className="descr"><p>Stack</p></NavLink>
				</div>
				<hr />
				<div className="topic">
					<NavLink to="/dsa/deque" className="descr"><p>Deque</p></NavLink>
				</div>
				<hr />
				<div className="topic">
					<NavLink to="/dsa/linkedlist" className="descr"><p>Linked List</p></NavLink>
				</div>
				<hr />
				<div className="topic">
					<NavLink to="/dsa/hashmap" className="descr"><p>Hash Map</p></NavLink>
				</div>
				<hr />
				<div className="topic">
					<NavLink to="/dsa/set" className="descr"><p>Set</p></NavLink>
				</div>
				<hr />
			</div>
			<div className="topic-li">
				<p>DSA - II</p>
				<a className="toggle-switch-a" id="toggle-dsa2" onClick={function(){
					if (document.getElementById('toggle-dsa2').style.transform=="rotateZ(90deg)"){
						document.getElementById('toggle-dsa2').style.transform="rotateZ(0deg)";
						document.getElementById('dsa-2').hidden=true;

					}else{
						document.getElementById('toggle-dsa2').style.transform="rotateZ(90deg)";
						document.getElementById('dsa-2').hidden=false;
					}
				}}>❱</a>
			</div>
			<hr/>
			<div hidden="true" id="dsa-2">
				<div className="topic">
					<NavLink to="/dsa/binarytree" className="descr"><p>Heap</p></NavLink>
				</div>
				<hr />
				<div className="topic">
					<NavLink to="/dsa/binarytree" className="descr"><p>Binary Tree</p></NavLink>
				</div>
				<hr />
				<div className="topic">
					<NavLink to="/dsa/avltree" className="descr"><p>AVL Tree</p></NavLink>
				</div>
				<hr />
				<div className="topic">
					<NavLink to="/dsa/btree" className="descr"><p>B Tree</p></NavLink>
				</div>
				<hr />
				<div className="topic">
					<NavLink to="/dsa/b+tree" className="descr"><p>B+ Tree</p></NavLink>
				</div>
				<hr />
			</div>
			<div className="topic-li">
				<p>DSA - III</p>
				<a className="toggle-switch-a" id="toggle-dsa3" onClick={function(){
					if (document.getElementById('toggle-dsa3').style.transform=="rotateZ(90deg)"){
						document.getElementById('toggle-dsa3').style.transform="rotateZ(0deg)";
						document.getElementById('dsa-3').hidden=true;

					}else{
						document.getElementById('toggle-dsa3').style.transform="rotateZ(90deg)";
						document.getElementById('dsa-3').hidden=false;
					}
				}}>❱</a>
			</div>
			<hr/>
			<div hidden="true" id="dsa-3">
				<div className="topic">
					<NavLink to="/dsa/graph" className="descr"><p>Graph Data Structure</p></NavLink>
				</div>
				<hr/>
				<div className="topic">
					<NavLink to="/dsa/graph" className="descr"><p>BFS algorithm</p></NavLink>
				</div>
				<hr/>
			</div>
			<div className="topic-li">
				<p>Sorting Algorithm</p>
				<a className="toggle-switch-a" id="toggle-sort" onClick={function(){
					if (document.getElementById('toggle-sort').style.transform=="rotateZ(90deg)"){
						document.getElementById('toggle-sort').style.transform="rotateZ(0deg)";
						document.getElementById('sorting').hidden=true;

					}else{
						document.getElementById('toggle-sort').style.transform="rotateZ(90deg)";
						document.getElementById('sorting').hidden=false;

					}
				}}>❱</a>

			</div>
			<div hidden="true" id="sorting">
				<hr />
				<div className="topic">
					<NavLink to="/dsa/sort/rank" className="descr"><p>Rank Sort</p></NavLink>
				</div>
				<hr/>
				<div className="topic">
					<NavLink to="/dsa/sort/selection" className="descr"><p>Selection Sort</p></NavLink>
				</div>
				<hr/>
				<div className="topic">
					<NavLink to="/dsa/sort/insertion" className="descr"><p>Insertion Sort</p></NavLink>
				</div>
				<hr/>
				<div className="topic">
					<NavLink to="/dsa/sort/bubble" className="descr"><p>Bubble Sort</p></NavLink>
				</div>
				<hr/>
				<div className="topic">
					<NavLink to="/dsa/sort/shell" className="descr"><p>Shell Sort</p></NavLink>
				</div>
				<hr/>
				<div className="topic">
					<NavLink to="/dsa/sort/merge" className="descr"><p>Merge Sort</p></NavLink>
				</div>
				<hr />
				<div className="topic">
					<NavLink to="/dsa/sort/quick" className="descr"><p>Quick Sort</p></NavLink>
				</div>
				<hr />
				<div className="topic">
					<NavLink to="/dsa/sort/counting" className="descr"><p>Counting Sort</p></NavLink>
				</div>
				<hr />
				<div className="topic">
					<NavLink to="/dsa/sort/radix" className="descr"><p>Radix Sort</p></NavLink>
				</div>
				<hr />
				<div className="topic">
					<NavLink to="/dsa/sort/bucket" className="descr"><p>Bucket Sort</p></NavLink>
				</div>
				<hr />
				<div className="topic">
					<NavLink to="/dsa/sort/heap" className="descr"><p>Heap Sort</p></NavLink>
				</div>
			</div>
			<hr/>
			<div className="topic-li">
				<p>Greedy Algorithm</p>
				<a className="toggle-switch-a" id="toggle-g-algo" onClick={function(){
					if (document.getElementById('toggle-g-algo').style.transform=="rotateZ(90deg)"){
						document.getElementById('toggle-g-algo').style.transform="rotateZ(0deg)";
						document.getElementById('g-algo').hidden=true;

					}else{
						document.getElementById('toggle-g-algo').style.transform="rotateZ(90deg)";
						document.getElementById('g-algo').hidden=false;

					}
				}}>❱</a>
			</div>

			<div hidden="true" id="g-algo">
				<hr/>
				<div className="topic">
					<NavLink to="/dsa/graph" className="descr"><p>Ford-Fulkerson Algorithm</p></NavLink>
				</div>
			</div>

			<hr/>
			<Author/>
		</div>
		</>
	);
}


function HomeDSA(){


	return(
		<>
		<div className="">
			<FlapDsa/>
			<div id="hamburx" className="hamburger" onClick={
                function(arg){
            	if(document.getElementById("hambure")){
                	let c = document.getElementById("hambure");
                	c.id="hamburx";
                	document.getElementsByClassName('flap-dsa')[0].style.left="0px";

            	}else if(document.getElementById("hamburx")){
                	let c = document.getElementById("hamburx");
                	c.id="hambure";
					document.getElementsByClassName('flap-dsa')[0].style.left="-300px"
            	}
           
            }}>
                <div id="ham-1"></div>
                <div id="ham-2"></div>
                <div id="ham-3"></div>
			</div>
			
		</div>

		</>
	);
}
/*
	[#] DSA Intro

*/
function DsaIntro(props){
	window.scrollTo(0,0)

	return(
		<>
			<br/>
			<Helmet>
        		<title>Data Structure & Algorithm Introduction</title>
        		<meta name="description" content="Learn basics about DSA" />
	      	</Helmet>
			<Head name="Introduction to DSA"/>
			<Mark desc="Data Structures (DS) tutorial provides basic and advanced concepts of Data Structure.
			
			
			"/>
			<Head name="What is a Data Structure?"/>
			<Mark desc="Data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.
				Depending on your requirement and project, it is important to choose the right data structure for your project. For example, 
				if you want to store data sequentially in the memory, then you can go for the Array data structure.
			"/>
			<br/>
			<Navigator left="" right="/dsa/queue"/>
		</>

	);
}
/*
	[#] Queue Data Structure
*/ 
function DSAQueue(props){
	window.scrollTo(0,0);

	return(
		<>
			<br/>
			<Helmet>
        		<title>Queue Data Structure</title>
        		<meta name="description" content="queue data structure" />
	      	</Helmet>
	      	<Head name="Queue"/>

		</>
	);
}
/*
	[#] Linked List Data Structure
*/ 
function DSALinkedList(props){
	window.scrollTo(0,0);

	return(
		<>
			<br/>
			<Helmet>
        		<title>Linked List Data Structure</title>
        		<meta name="description" content="linked list data structure and its algorithms" />
	      	</Helmet>
	      	<Head name="Linked List"/>
	      	<Mark desc="A linked list is a kind of data structure where every node is linked with the other ,this is similar to a chain.
	      		the tlp:cyan Node contains fields such as tlp:cyan Data and pointer to the next Node. following is the representation of the data structure

	      	"/>
			<div align="center"><img style={{borderRadius:"10px", width:"500px"}} src="https://thelinuxpoint.github.io/linkedlist.svg" className="put-in-side-code"/></div>

	      	<Head name="Creating Linked list"/>
	      		
	      	<Head name="Inserting Element in Linked List"/>

	      	<Head name="Deleting Element from Linked List"/>
	      	<Head name="Sorting Linked List"/>
	      	<Head name="The Runner Technique"/>
	      	<Head name="Detect Loop in Linked List"/>

	      	<Navigator left="/dsa/deque" right="/dsa/hashmap"/>

 
		</>
	);
}







/*
	[#] DSA Sorting : Rank Sort

*/
function DSARankSort(props){
	window.scrollTo(0,0)

	return(
		<>
			<br/>
			<Helmet>
        		<title>Rank Sort Algorithm</title>
        		<meta name="description" content="Learn about Rank Sorting" />
	      	</Helmet>
			<Head name="Rank Sort"/>
			<Mark desc="Ranking a array of element in a sequence is the number of smaller elements in the sequence plus the number of smaller elements in the sequence plus the number of equal elements that appearto its left. tlp:br tlp:br For Example in a sequence of array a = [ 4, 3, 9, 3, 7 ], then the ranks are r = [ 2, 0, 4, 1, 3 ]"/>
			<Mark desc="We can estimate the complexity of rank by counting the number of comparisions between elements. 
				For each value of tlp:cyan i , the number of element comparisions is tlp:cyan i . so the total number of element comparissions is as follows: tlp:br 1 + 2 + 3 + ... + ( n -1 ) = ( n - 1 ) x n/2 ."/>
			<Mark desc="The Code: tlp:br tlp:br tlp:codes 
			tlp:br
				tlp:cyan template < tlp:cyan class T > tlp:br
				tlp:cyan void rank(T a[], tlp:cyan int n, tlp:cyan int r[]) { tlp:br tlp:br 
					tlp:tab tlp:red for ( tlp:cyan int i = 0; i < n; i++ ) tlp:br
					tlp:tab tlp:tab r[i] = 0; # // # initialize tlp:br tlp:br
					tlp:tab # // # compare # all # elements # pairs tlp:br 
					tlp:tab tlp:red for ( tlp:cyan int i = 0; i < n; i++ ) tlp:br
					tlp:tab tlp:tab tlp:red for ( tlp:cyan int j = 0; j < i; j++ ) tlp:br
					tlp:tab tlp:tab tlp:tab tlp:red if ( a[j] <= a[i] ) r[i]++; tlp:br
					tlp:tab tlp:tab tlp:tab tlp:red else r[j]++; tlp:br

				tlp:br }
			tlp:br
			tlp:codee"/>
			<Mark slang="C++" desc="Now we need to arrange the items taking rank values as index. tlp:br tlp:br The Code: tlp:br tlp:br
			tlp:codes 
			tlp:br
			tlp:cyan void rearrange(T a[], tlp:cyan int n, tlp:cyan int r[]) { tlp:br tlp:br 
			tlp:tab T *u = tlp:red new T[n]; tlp:br tlp:br 

			tlp:tab  tlp:red for ( tlp:cyan int i = 0; i < n; i++) tlp:br tlp:tab tlp:tab 
				u[r[i]] = a[i]; tlp:br tlp:br
	
			tlp:tab  tlp:red for ( tlp:cyan int i = 0; i < n; i++) tlp:br tlp:tab tlp:tab 
				a[i] = u[i]; tlp:br tlp:br
			
			tlp:tab tlp:red delete[] u; tlp:br

			}
			tlp:br
			tlp:codee
			
			
			"/>
			<Head name="Best Case :"/>
			<Head name="Worst Case :"/>


			<br/>
			<Navigator left="/dsa/intro" right="/dsa/sort/selection"/>

		</>

	);
}
/*
	[#] DSA Sorting : Selection Sort

*/
function DSASelectionSort(props){
	window.scrollTo(0,0)

	return(
		<>
			<br/>
			<Helmet>
        		<title>Selection Sort Algorithm</title>
        		<meta name="description" content="Learn about selection sorting" />
	      	</Helmet>
			<Head name="Selection Sort"/>
			<Mark desc="The Selection Sort is an another sorting technique in which
			we find largest or smallest element in an array and move it to extreme right or left. tlp:br tlp:br 
			The following is the example of finding the smallest and moving it to left
			"/>
			<br/>
			<div align="center"><img style={{borderRadius:"10px",height:"300px", width:"300px"}} src="https://thelinuxpoint.github.io/selection_sort.gif" className="put-in-side-code"/></div>
			<Mark desc="Let us consider an array which is unsorted. the following steps will be followed in this
			sorting algorithm."/>
			<Head name="Equivalent C++ Code"/>
			<div className="put-in-side-code"><ReactEmbedGist  gist="thelinuxpoint/e39a95138142abfd0a291874775fc016"/></div>
			
			<Head name="Equivalent Python Code"/>
			<div className="put-in-side-code"><ReactEmbedGist gist="thelinuxpoint/4fe606909e0f2f9d587e3c427301cdab"/></div>
			<br/>
			<Navigator left="/dsa/sort/rank" right="/dsa/sort/insertion"/>
		</>

	);
}
/*
	[#] DSA Sorting : Bubble Sort

*/
function DSABubbleSort(props){
	window.scrollTo(0,0)

	return(
		<>
			<br/>
			<Helmet>
        		<title>Bubble Sort Algorithm</title>
        		<meta name="description" content="Learn about bubble sorting technique" />
	      	</Helmet>
			<Head name="Bubble Sort"/>
			<Mark desc="Bubble sort is the one of the most simplest way to sort a array of unsorted elements,
			this sorting algorithm compares each element to right and swaps it if less than left one. tlp:br tlp:br 
			let us understand this with a Example ,Given is a unsorted array we will start with index i = 0 and compare index i + 1
			"/>
			<div align="center"><img style={{borderRadius:"10px", width:"400px"}} src="https://thelinuxpoint.github.io/bubble-u.svg" className="put-in-side-code"/></div>
			<Mark desc="tlp:red compare 4 and 2 since 4 is greater then 2 swaping occurs here."/>
			<div align="center"><img style={{borderRadius:"10px", width:"400px"}} src="https://thelinuxpoint.github.io/bubble-1.svg" className="put-in-side-code"/></div>
			<Mark desc="tlp:red compare 4 and 3 since 4 is greater then 3 swaping occurs here."/>
			<div align="center"><img style={{borderRadius:"10px", width:"400px"}} src="https://thelinuxpoint.github.io/bubble-2.svg" className="put-in-side-code"/></div>
			<Mark desc="tlp:red compare 4 and 1 since 4 is greater then 1 swaping occurs here. now if we compare 4 and 5 it is already sorted so here we complete one iteration but our array is not sorted so we will repeat the steps."/>
			<div align="center"><img style={{borderRadius:"10px", width:"400px"}} src="https://thelinuxpoint.github.io/bubble-3.svg" className="put-in-side-code"/></div>
			<Mark desc="since 2 and 3 is already sorted then compare 3 and 1 since 3 is greater then 1 swaping occurs here. now rest of the elements is sorted after 3. so here we complete our second iteration."/>
			<div align="center"><img style={{borderRadius:"10px", width:"400px"}} src="https://thelinuxpoint.github.io/bubble-4.svg" className="put-in-side-code"/></div>
			<Mark desc="tlp:red compare 2 and 1 since 2 is greater then 1 swaping occurs here. here we complete our third iteration after this operation all array elements are sorted."/>
			<div align="center"><img style={{borderRadius:"10px", width:"400px"}} src="https://thelinuxpoint.github.io/bubble-5.svg" className="put-in-side-code"/></div>
			<Mark desc="Here we have a SORTED ARRAY"/>
			<div align="center"><img style={{borderRadius:"10px", width:"400px"}} src="https://thelinuxpoint.github.io/bubble-6.svg" className="put-in-side-code"/></div>
			
			<div className="put-in-side-code"><ReactEmbedGist gist="thelinuxpoint/e83e85572b961ec9928861d3702e809d"/></div>

			<Head name="Complexity"/>
			<Table head="Time Complexity" colsp={3} desc="- Worst | - Average | - Best |;- O(n^2) | - O(n^2) | - O(n) |"/>

			<br/>
			<Navigator left="/dsa/sort/insertion" right="/dsa/sort/shell"/>
		</>

	);
}
/*
	[#] DSA Sorting : Insertion Sort

*/
function DSAInsertionSort(props){
	window.scrollTo(0,0)

	return(
		<>
			<br/>
			<Helmet>
        		<title>Insertion Sort Algorithm</title>
        		<meta name="description" content="Learn about insertion sorting" />
	      	</Helmet>
			<Head name="Insertion Sort"/>
			<Mark desc=""/>
			<br/>
			<Navigator left="/dsa/sort/selection" right="/dsa/sort/bubble"/>

		</>
	);

}
/*
	[#] DSA Sorting : Merge Sort

*/
function DSAMergeSort(props){
	window.scrollTo(0,0)

	return(
		<>
			<br/>
			<Helmet>
        		<title>Merge Sort Algorithm</title>
        		<meta name="description" content="Learn about divide and conquor sorting" />
	      	</Helmet>
			<Head name="Merge Sort"/>
			<Mark desc=""/>
			<br/>
			<Navigator left="/dsa/sort/shell" right="/dsa/sort/quick"/>

		</>
	);

}
/*
	[#] DSA Sorting : Shell Sort

*/
function DSAShellSort(props){
	window.scrollTo(0,0)

	return(
		<>
			<br/>
			<Helmet>
        		<title>Shell Sort Algorithm</title>
        		<meta name="description" content="Learn about shell sorting" />
	      	</Helmet>
			<Head name="Shell Sort"/>
			<Mark desc=""/>
			<br/>
			<Navigator left="/dsa/sort/bubble" right="/dsa/sort/merge"/>

		</>
	);

}
/*
	[#] DSA Sorting : Quick Sort

*/
function DSAQuickSort(props){
	window.scrollTo(0,0)

	return(
		<>
			<br/>
			<Helmet>
        		<title>Quick Sort Algorithm</title>
        		<meta name="description" content="Learn about quick sort algorithm" />
	      	</Helmet>
			<Head name="Quick Sort"/>
			<Mark desc=""/>
			<br/>
			<Navigator left="/dsa/sort/merge" right="/dsa/sort/counting"/>

		</>
	);

}
/*
	[#] DSA Sorting : Radix Sort

*/
function DSARadixSort(props){
	window.scrollTo(0,0)

	return(
		<>
			<br/>
			<Helmet>
        		<title>Radix Sort Algorithm</title>
        		<meta name="description" content="Learn about radix sorting" />
	      	</Helmet>
			<Head name="Radix Sort"/>
			<Mark desc=""/>
			<br/>
			<Navigator left="/dsa/sort/counting" right="/dsa/sort/bucket"/>

		</>
	);

}
/*
	[#] DSA Sorting : Counting Sort

*/
function DSACountingSort(props){
	window.scrollTo(0,0)

	return(
		<>
			<br/>
			<Helmet>
        		<title>Counting Sort Algorithm</title>
        		<meta name="description" content="Learn about counting sort" />
	      	</Helmet>
			<Head name="Counting Sort"/>
			<Mark desc=""/>
			<br/>
			<Navigator left="/dsa/sort/quick" right="/dsa/sort/radix"/>

		</>
	);

}
/*
	[#] DSA Sorting : Bucket Sort

*/
function DSABucketSort(props){
	window.scrollTo(0,0)

	return(
		<>
			<br/>
			<Helmet>
        		<title>Bucket Sort Algorithm</title>
        		<meta name="description" content="Learn about bucket sorting method" />
	      	</Helmet>
			<Head name="Bucket Sort"/>
			<Mark desc=""/>
			<br/>
			<Navigator left="/dsa/sort/radix" right="/dsa/sort/heap"/>

		</>
	);

}
/*
	[#] DSA Sorting : Heap Sort

*/
function DSAHeapSort(props){
	window.scrollTo(0,0)

	return(
		<>
			<br/>
			<Helmet>
        		<title>Heap Sort Algorithm</title>
        		<meta name="description" content="Learn about heap sorting" />
	      	</Helmet>
			<Head name="Heap Sort"/>
			<Mark desc=""/>
			<br/>
			<Navigator left="/dsa/sort/bucket" right=""/>

		</>
	);

}
export {

	DsaIntro,
	HomeDSA,
	// all Sorting algorithm
	DSARankSort,
	DSASelectionSort,
	DSABubbleSort,
	DSAInsertionSort,
	DSAMergeSort,
	DSAQuickSort,
	DSAHeapSort,
	DSARadixSort,
	DSACountingSort,
	DSABucketSort,
	DSAShellSort,
	// all data structure 
	DSAQueue,
	DSALinkedList


};

