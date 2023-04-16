import java.util.Iterator;
import java.util.LinkedList;
import java.util.Queue;
 
class Main
{
    // Iterate through a queue in Java
    public static void main(String[] args)
    {
        Queue<Integer> queue = new LinkedList<Integer>();
        queue.add(1);
        queue.add(2);
        queue.add(3);
 
        // using Iterator to iterate through a queue
        Iterator<Integer> itr = queue.iterator();
 
        // hasNext() returns true if the queue has more elements
        while (itr.hasNext())
        {
            // next() returns the next element in the iteration
            System.out.println(itr.next());
        }
    }
}