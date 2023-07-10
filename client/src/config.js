import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getChallenges() {
    try {
        let { data, error } = await supabase
            .from('challenges')
            .select('*')
        if (error) {
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}