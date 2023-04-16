#include<stdio.h>
int Linearsearch(int arr[],int size,int element){
    for(int i=0;i<size;i++){
        if(arr[i]==element){
            return i;
        }
    }
return -1;
}


int main(){
    int arr[30]={1212,3,4,5,6,73,13,55,74,2344,32};
    int element=3;
    int size=sizeof(arr)/sizeof(int);
    int searchedelement=Linearsearch(arr,size,element);
    printf("The elemet %d was find at %d\n",element,searchedelement);
    return 0;
}